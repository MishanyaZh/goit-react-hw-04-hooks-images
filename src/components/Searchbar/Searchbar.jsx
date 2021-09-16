import PropTypes from 'prop-types';

import s from '../Searchbar/Searchbar.module.css';

const Searchbar = ({ onSubmit }) => (
  <header className={s.searchbar}>
    <form
      onSubmit={e => {
        e.preventDefault();
        const value = e.target.elements.imgValue.value;
        onSubmit(value);

        e.target.elements.imgValue.value = '';
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
  </header>
);

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
