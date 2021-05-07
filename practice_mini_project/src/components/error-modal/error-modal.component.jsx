import Button from '../UI/button/button.component';
import Card from '../UI/card/card.component';
import classes from './error-modal.module.css';

const ErrorModal = ({ onSubmit, title, message }) => (
  <div className={classes.backdrop} onClick={onSubmit}>
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
  </div>
);

export default ErrorModal;
