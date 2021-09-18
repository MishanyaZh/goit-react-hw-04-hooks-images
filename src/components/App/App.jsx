import { useState, useEffect } from 'react';
// import {Component} from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loader from 'react-loader-spinner';
import { LoaderContainer } from '../Loader/LoaderContainer.styled.jsx';

import s from '../App/App.module.css';
import { fetchImages } from '../../services/api';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const App = () => {
  const [imgValue, setImgValue] = useState('');
  const [images, setImages] = useState([]);
  const [reqStatus, setrReqStatus] = useState('idle');
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [selectImage, setSelectImage] = useState(null);

  useEffect(() => {
    if (imgValue === '') {
      toast.success('hello my friends');
      return;
    }
    try {
      setrReqStatus('idle');
      fetchImages(imgValue, page).then(responseImages => {
        setLoader(true);

        if (!responseImages.length) {
          setLoader(false);
          setImages([]);
          setrReqStatus('rejected');
          setPage(1);
          toast.error('your images not find.');
          return;
        }

        setImages(prevImages => [...prevImages, ...responseImages]);
        setLoader(false);
        scrollTo();
        setrReqStatus('resolved');
        toast(`its your, ${imgValue}s!`, { icon: '👏' });
      });
    } catch (error) {
      setrReqStatus('rejected');
      toast.error("This didn't work.");
    } finally {
      setLoader(false);
    }
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
        {reqStatus === 'resolved' && !loader && (
          <Button onClickLoadMore={loadMoreClick} />
        )}
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
