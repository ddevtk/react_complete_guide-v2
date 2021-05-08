import React, { useEffect, useState, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const EMAIL_INITIAL_STATE = {
  emailVal: '',
  isValid: null,
};
const PASSWORD_INITIAL_STATE = {
  passVal: '',
  isValid: null,
};

const emailReducer = (state = EMAIL_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return {
        ...state,
        emailVal: action.payload,
        isValid: action.payload.includes('@'),
      };
    case 'INPUT_BLUR':
      return {
        emailVal: state.emailVal,
        isValid: state.emailVal.includes('@'),
      };
    default:
      return state;
  }
};

const passwordReducer = (state = PASSWORD_INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_INPUT':
      return {
        ...state,
        passVal: action.payload,
        isValid: action.payload.trim().length > 6,
      };
    case 'INPUT_BLUR':
      return {
        passVal: state.passVal,
        isValid: state.passVal.trim().length > 6,
      };
    default:
      return state;
  }
};

const Login = props => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    EMAIL_INITIAL_STATE
  );

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    PASSWORD_INITIAL_STATE
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setFormIsValid(emailState.isValid && passwordState.isValid);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [emailState, passwordState]);

  const emailChangeHandler = e => {
    dispatchEmail({
      type: 'USER_INPUT',
      payload: e.target.value,
    });
  };

  const passwordChangeHandler = e => {
    dispatchPassword({
      type: 'USER_INPUT',
      payload: e.target.value,
    });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
  };

  const submitHandler = event => {
    event.preventDefault();
    props.onLogin(emailState.emailVal, passwordState.passVal);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={emailState.emailVal}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={passwordState.passVal}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
