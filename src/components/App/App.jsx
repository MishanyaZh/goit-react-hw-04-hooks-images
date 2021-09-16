import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Loader from 'react-loader-spinner';
import { LoaderContainer } from '../Loader/LoaderContainer.styled.jsx';

import s from '../App/App.module.css';
import { fetchImages } from '../../services/api';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

class App extends Component {
  state = {
    imgValue: null,
    images: [],
    reqStatus: 'idle',
    // idle, pending, resolved, rejected
    page: 1,
    loader: false,
    selectImage: null,
  };

  async componentDidUpdate(_, prevState) {
    const { imgValue, page } = this.state;

    if (prevState.imgValue !== imgValue || prevState.page !== page) {
      this.setState({ loader: true });

      if (imgValue.trim() === '') {
        this.setState({
          reqStatus: 'pending',
        });
        toast.error('Pleas write something');
        return;
      }

      try {
        const images = await fetchImages(imgValue, page);
        this.setState({
          reqStatus: 'idle',
        });

        if (!images.length) {
          this.setState({
            reqStatus: 'rejected',
            images: [],
            page: 1,
          });
          toast.error('your images not find.');
          return;
        }

        if (prevState.imgValue !== imgValue) {
          this.setState({
            images: [],
            page: 1,
          });
        }

        this.setState(prevState => {
          return {
            images: [...prevState.images, ...images],
            reqStatus: 'resolved',
            // loader: false,
          };
        });

        this.scrollTo();

        toast(`its your, ${imgValue}s!`, {
          icon: '👏',
        });
      } catch (error) {
        this.setState({ reqStatus: 'rejected' });
        toast.error("This didn't work.");
      } finally {
        this.setState({ loader: false });
      }
    }
  }

  onCloseModal = () => {
    this.setState({ selectImage: null });
  };

  handleSelectImage = imgUrl => {
    this.setState({ selectImage: imgUrl });
  };

  handleFormSubmit = imgValue => {
    this.setState({
      imgValue,
      page: 1,
      loader: true,
    });
  };

  loadMoreClick = e => {
    this.setState({
      page: this.state.page + 1,
    });
  };

  scrollTo = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    const { images, reqStatus, loader, selectImage } = this.state;

    return (
      <div className={s.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={images}
          handleSelectImage={this.handleSelectImage}
        />

        {selectImage && (
          <Modal image={selectImage} onCloseModal={this.onCloseModal} />
        )}

        <LoaderContainer>
          {reqStatus === 'resolved' && !loader && (
            <Button onClickLoadMore={this.loadMoreClick} />
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
  }
}

export default App;
