import PropTypes from 'prop-types';

import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = imagProp => {
  const { id, webImg, largeImg, handleSelectImage } = imagProp;

  const handleImageClick = () => {
    handleSelectImage(largeImg);
  };

  return (
    <li onClick={handleImageClick} className={s.imageGalleryItem}>
      <img src={webImg} alt={id} className={s.imageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  webImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  handleSelectImage: PropTypes.func.isRequired,
};
