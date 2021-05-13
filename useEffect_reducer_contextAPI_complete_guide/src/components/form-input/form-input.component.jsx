import classes from './form-input.module.css';

const FormInput = ({
  isValid,
  label,
  onChangedHandler,
  onBlur,
  ...otherProps
}) => {
  return (
    <div
      className={`${classes.control} ${
        isValid === false ? classes.invalid : ''
      }`}
    >
      <label>{label}</label>
      <input onChange={onChangedHandler} onBlur={onBlur} {...otherProps} />
    </div>
  );
};
export default FormInput;
