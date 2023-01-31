import { Button } from 'components/Button/Button';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { SearchBar } from 'components/Searchbar/SearchBar';
import { getImages } from 'components/service/API';
import { Component } from 'react';
import { AppBox } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';
import { PuffLoader } from 'components/Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loader: false,
    showBtn: false,
    scroll: null,
  };

  async componentDidUpdate(_, { page, query }) {
    if (
      (page !== this.state.page || query !== this.state.query) &&
      this.state.query.trim()
    ) {
      try {
        this.setState({ loader: !this.state.loader });
        await getImages(this.state.query, this.state.page).then(resp => {
          if (resp.hits.length) {
            this.setState(prevState => {
              return {
                images: [...prevState.images, ...resp.hits],
                showBtn: this.state.page < Math.ceil(resp.totalHits / 12),
              };
            });
          } else {
            toast.error('Enter a more meaningful search term');
          }
        });
      } catch (error) {
        console.log(error);
        toast.error("We're in trouble, sorry");
      } finally {
        this.setState({ loader: !this.state.loader });
      }
    }
  }

  onGetRequest = ({ search }) => {
    if (search.trim()) {
      this.setState({
        images: [],
        page: 1,
        query: search,
      });
    } else {
      toast.error('Please enter any query');
    }
  };

  nextPage = () => {
    this.setState(pervState => {
      return { page: pervState.page + 1 };
    });
  };

  render() {
    const { images, showBtn, loader } = this.state;
    return (
      <AppBox>
        <Toaster position="top-right" />
        <SearchBar onSubmit={this.onGetRequest} />
        <ImageGallery images={images} />
        {showBtn && <Button nextPage={this.nextPage} />}
        {loader && <PuffLoader />}
      </AppBox>
    );
  }
}
