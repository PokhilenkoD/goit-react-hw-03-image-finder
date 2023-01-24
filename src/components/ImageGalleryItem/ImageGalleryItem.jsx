export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL },
}) => {
  return (
    <li class="gallery-item">
      <img src={webformatURL} alt={largeImageURL} />
    </li>
  );
};
