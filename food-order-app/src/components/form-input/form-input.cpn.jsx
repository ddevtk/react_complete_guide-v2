import classes from './form-input.module.css';

const FormInput = ({ label, input }) => (
  <div className={classes.input}>
    <label htmlFor={input.id}>{label}</label>
    <input {...input} />
  </div>
);
export default FormInput;
