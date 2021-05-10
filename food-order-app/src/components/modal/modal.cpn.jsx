import ReactDOM from 'react-dom';
import { Fragment, useContext } from 'react';
import classes from './modal.module.css';
import { showCartContext } from '../../store/show-cart-context/showCartProvider';

const Backdrop = () => {
  const { onHidden } = useContext(showCartContext);
  return <div className={classes.backdrop} onClick={onHidden} />;
};
const ModalOverlay = ({ children }) => {
  return <div className={classes.modal}>{children}</div>;
};
const portalEl = document.getElementById('overlay');

const Modal = ({ children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalEl)};
      {ReactDOM.createPortal(<ModalOverlay children={children} />, portalEl)};
    </Fragment>
  );
};

export default Modal;
