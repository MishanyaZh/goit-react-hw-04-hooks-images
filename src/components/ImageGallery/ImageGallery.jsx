import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import s from '../ImageGallery/ImageGallery.module.css';

const ImageGallery = ({ images, handleSelectImage }) => {
  // const { id, webImg, largeImg } = images;
  return (
    <ul className={s.imageGallery}>
      {images.map(img => {
        return (
          <ImageGalleryItem
            handleSelectImage={handleSelectImage}
            {...img}
            key={img.id}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  handleSelectImage: PropTypes.func.isRequired,
};
