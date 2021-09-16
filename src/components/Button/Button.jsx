import PropTypes from 'prop-types';

import s from '../Button/Button.module.css';

const Button = ({ onClickLoadMore }) => {
  return (
    <button
      onClick={e => {
        e.preventDefault();
        onClickLoadMore();
      }}
      className={s.button}
      type="button"
    >
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClickLoadMore: PropTypes.func.isRequired,
};
