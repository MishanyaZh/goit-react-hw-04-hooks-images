import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loader from 'react-loader-spinner';
import { fetchImages } from '../../services/api';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';
import LoaderContainer from '../Loader/LoaderContainer';
import s from '../App/App.module.css';

const App = () => {
  const [imgValue, setImgValue] = useState('');
  const [images, setImages] = useState([]);
  const [reqStatus, setReqStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [selectImage, setSelectImage] = useState(null);

  useEffect(() => {
    async function getImages() {
      if (imgValue === '') {
        toast.success('hello my friends');
        return;
      }

      try {
        setReqStatus('idle');
        const responseImages = await fetchImages(imgValue, page);
        setLoader(true);

        if (!responseImages.length) {
          setImages([]);
          setPage(1);
          toast.error('your images not find.');
          return;
        }

        setImages(prevImages => [...prevImages, ...responseImages]);
        setReqStatus('resolved');
        toast(`its your, ${imgValue}s!`, { icon: '👏' });
        scrollTo();
      } catch (error) {
        toast.error("This didn't work.");
      } finally {
        setLoader(false);
      }
    }
    getImages();
  }, [imgValue, page]);

  const handleFormSubmit = imgValue => {
    if (imgValue.trim() === '') {
      toast.error('Pleas write something');
      return;
    }
    setImgValue(imgValue);
    setPage(1);
    setImages([]);
    setLoader(true);
  };

  const loadMoreClick = e => {
    setPage(page + 1);
    setLoader(true);
  };

  const handleSelectImage = imgUrl => {
    setSelectImage(imgUrl);
  };

  const onCloseModal = () => {
    setSelectImage(null);
  };

  const scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className={s.app}>
      <Searchbar handleFormSubmit={handleFormSubmit} imgValue={imgValue} />
      <ImageGallery images={images} handleSelectImage={handleSelectImage} />
      {selectImage && <Modal image={selectImage} onCloseModal={onCloseModal} />}
      <LoaderContainer>
        {reqStatus === 'resolved' && <Button onClickLoadMore={loadMoreClick} />}
        {loader !== false && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
      </LoaderContainer>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;
