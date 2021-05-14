import { useDispatch } from 'react-redux';
import authSlice from '../redux/authentication/auth.reducer';
import classes from './Auth.module.css';

const Auth = () => {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch(authSlice.actions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={loginHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
