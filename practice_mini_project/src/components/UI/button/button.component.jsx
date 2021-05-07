import classes from './button.module.css';

const Button = ({ type, children, onClick }) => {
  return (
    <button
      className={classes.button}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
