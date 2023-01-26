import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Image, ImageListItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    modalIsShow: false,
  };

  showModal = () => {
    this.setState({ modalIsShow: true });
  };
  closeModal = () => {
    this.setState({ modalIsShow: false });
  };

  render() {
    const {
      image: { webformatURL, largeImageURL },
    } = this.props;
    const { modalIsShow } = this.state;
    return (
      <ImageListItem>
        <Image
          src={webformatURL}
          alt={largeImageURL}
          onClick={this.showModal}
        />
        {this.state.modalIsShow && (
          <Modal onClose={this.closeModal} modalIsShow={modalIsShow}>
            <img src={largeImageURL} alt={largeImageURL} />
          </Modal>
        )}
      </ImageListItem>
    );
  }
}
