import PropTypes from 'prop-types';

import toast, { Toaster } from 'react-hot-toast';

import s from '../Searchbar/Searchbar.module.css';

const Searchbar = ({ handleFormSubmit, imgValue }) => (
  <header className={s.searchbar}>
    <form
      onSubmit={e => {
        e.preventDefault();
        const value = e.target.elements.imgValue.value;
        if (imgValue.trim() !== value.trim()) {
          handleFormSubmit(value);
        } else {
          toast.error(`Pleas write something`);
        }
        e.target.reset();
      }}
      className={s.searchForm}
    >
      <button type="submit" className={s.searchFormButton}>
        <span className={s.searchFormButtonLabel}>Search</span>
      </button>

      <input
        name="imgValue"
        className={s.searchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
    <Toaster position="top-right" reverseOrder={false} />
  </header>
);

export default Searchbar;

Searchbar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
