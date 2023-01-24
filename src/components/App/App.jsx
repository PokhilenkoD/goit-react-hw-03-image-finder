import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { SearchBar } from 'components/Searchbar/SearchBar';
import { getImages } from 'components/service/API';
import { Component } from 'react';
import { AppBox } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.page !== this.state.page) {
      getImages(this.state.query, this.state.page).then(resp => {
        this.setState(prevState => {
          return { images: [...prevState.images, ...resp.hits] };
        });
      });
    }
  }

  onGetRequest = values => {
    this.setState({
      page: 1,
      query: values.search,
    });
    if (values.search) {
      getImages(values.search, this.state.page).then(resp => {
        this.setState({ images: resp.hits });
      });
    }
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const images = this.state.images;
    return (
      <AppBox>
        <SearchBar onSubmit={this.onGetRequest} />
        <ImageGallery images={images} />
        {this.state.query && <Button nextPage={this.nextPage} />}
      </AppBox>
    );
  }
}
