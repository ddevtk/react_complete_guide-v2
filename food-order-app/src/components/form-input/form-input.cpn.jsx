import React from 'react';

import classes from './form-input.module.css';

const FormInput = React.forwardRef((props, ref) => (
  <div className={classes.input}>
    <label htmlFor={props.input.id}>{props.label}</label>
    <input {...props.input} ref={ref} />
  </div>
));
export default FormInput;
