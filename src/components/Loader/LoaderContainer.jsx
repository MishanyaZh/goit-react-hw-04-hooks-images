import s from '../Loader/LoaderContainer.module.css';

const LoaderContainer = ({ children }) => {
  return <div className={s.loaderContainer}>{children}</div>;
};

export default LoaderContainer;
