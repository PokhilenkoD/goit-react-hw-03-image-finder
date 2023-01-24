import { Image, ImageListItem } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL },
}) => {
  return (
    <ImageListItem class="gallery-item">
      <Image src={webformatURL} alt={largeImageURL} />
    </ImageListItem>
  );
};
