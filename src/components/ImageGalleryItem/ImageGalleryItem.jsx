import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
import { Image, ImageListItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

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
      image: { webformatURL, largeImageURL, tags },
    } = this.props;

    const { modalIsShow } = this.state;
    return (
      <ImageListItem>
        <Image src={webformatURL} alt={tags} onClick={this.showModal} />
        {modalIsShow && (
          <Modal onClose={this.closeModal} modalIsShow={modalIsShow}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </ImageListItem>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
};
