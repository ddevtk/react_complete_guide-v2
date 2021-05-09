import React, { useEffect, useState, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../auth-context/auth-context';
import FormInput from '../form-input/form-input.component';

const EMAIL_INITIAL_STATE = {
  emailVal: '',
  isValid: null,
};
const PASSWORD_INITIAL_STATE = {
  passVal: '',
  isValid: null,
};

const emailReducer = (state, action) => {
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

const passwordReducer = (state, action) => {
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

const Login = () => {
  const { onLogin } = useContext(AuthContext);
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
    if (formIsValid) {
      onLogin(emailState.emailVal, passwordState.passVal);
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <FormInput
          label='Email'
          name='email'
          type='email'
          isValid={emailState.isValid}
          value={emailState.emailVal}
          onChangedHandler={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <FormInput
          label='Password'
          name='password'
          type='password'
          isValid={passwordState.isValid}
          value={passwordState.passVal}
          onChangedHandler={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type='submit' className={classes.btn}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
