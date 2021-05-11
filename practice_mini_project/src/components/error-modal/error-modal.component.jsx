import { Fragment } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../UI/button/button.component';
import Card from '../UI/card/card.component';
import classes from './error-modal.module.css';

const Backdrop = ({ onSubmit }) => (
  <div className={classes.backdrop} onClick={onSubmit} />
);

const ModalOverlay = ({ title, message, onSubmit }) => (
  <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{title}</h2>
    </header>
    <div className={classes.content}>
      <p> {message}</p>
    </div>
    <footer className={classes.actions}>
      <Button type='button' onClick={onSubmit}>
        Okay
      </Button>
    </footer>
  </Card>
);

const ErrorModal = ({ onSubmit, title, message }) => (
  <Fragment>
    {ReactDOM.createPortal(
      <Backdrop onSubmit={onSubmit} />,
      document.getElementById('backdrop-root')
    )}
    {ReactDOM.createPortal(
      <ModalOverlay title={title} message={message} onSubmit={onSubmit} />,
      document.getElementById('overlay-root')
    )}
  </Fragment>
);

export default ErrorModal;
