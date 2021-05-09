import ReactDOM from 'react-dom';
import { Fragment } from 'react';
import classes from './modal.module.css';

const Backdrop = ({ onHidden }) => (
  <div className={classes.backdrop} onClick={onHidden} />
);
const ModalOverlay = ({ children }) => {
  return <div className={classes.modal}>{children}</div>;
};
const portalEl = document.getElementById('overlay');

const Modal = ({ children, onHidden }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onHidden={onHidden} />, portalEl)};
      {ReactDOM.createPortal(<ModalOverlay children={children} />, portalEl)};
    </Fragment>
  );
};

export default Modal;
