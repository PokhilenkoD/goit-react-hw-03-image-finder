import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { SearchBar } from 'components/Searchbar/SearchBar';
import { getImages } from 'components/service/API';
import { Component } from 'react';
import { AppBox } from './App.styled';
import FadeLoader from 'react-spinners/FadeLoader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loader: false,
  };

  async componentDidUpdate(_, { page, images }) {
    if (page !== this.state.page) {
      try {
        getImages(this.state.query, this.state.page).then(resp => {
          this.setState(prevState => {
            return { images: [...images, ...resp.hits] };
          });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  onGetRequest = async ({ search }) => {
    this.setState({
      page: 1,
      query: search.trim(),
    });
    if (search.trim()) {
      try {
        this.setState({ loader: true });
        await getImages(search, this.state.page).then(resp => {
          this.setState({ images: resp.hits });
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loader: false });
      }
    }
  };

  nextPage = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    const { images, query, loader } = this.state;
    return (
      <AppBox>
        <SearchBar onSubmit={this.onGetRequest} />
        {loader ? (
          <FadeLoader
            color="#3f51b5"
            height={300}
            width={20}
            cssOverride={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ) : (
          <ImageGallery images={images} />
        )}
        {query && <Button nextPage={this.nextPage} />}
      </AppBox>
    );
  }
}
