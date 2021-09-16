import PropTypes from 'prop-types';
import { useEffect } from 'react';

// import * as basicLightbox from 'basiclightbox'

import s from '../Modal/Modal.module.css';

const Modal = ({ image, onCloseModal }) => {
  useEffect(() => {
    window.addEventListener('keydown', onEscape);
    return () => {
      window.removeEventListener('keydown', onEscape);
    };
  });

  const onEscape = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };

  return (
    <div onClick={onCloseModal} className={s.overlay}>
      <div className={s.modal}>
        <img src={image} alt={image} />
        {/* {basicLightbox.create(`
          <img src=${image} alt=${image} width="800" height="600"/>
          `).show()} */}
      </div>
    </div>
  );
};

// export default class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.onEscape);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onEscape);
//   }
// onEscape = e => {
//   if (e.code === 'Escape') {
//     this.props.onCloseModal();
//   }
// };
//   render() {
//     const { image, onCloseModal } = this.props;

//     return (
//       <div onClick={onCloseModal} className={s.overlay}>
//         <div className={s.modal}>
//           <img src={image} alt={image} />
//           {/* {basicLightbox.create(`
//           <img src=${image} alt=${image} width="800" height="600"/>
//           `).show()} */}
//         </div>
//       </div>
//     );
//   }
// }

Modal.propTypes = {
  imgProp: PropTypes.string,
  onCloseModal: PropTypes.func,
};

export default Modal;
