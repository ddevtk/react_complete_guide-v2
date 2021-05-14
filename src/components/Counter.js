import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const toggleCounterHandler = () => {};

  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const incrementHandler = () => {
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
