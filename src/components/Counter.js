import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import counterSlice from '../redux/counter/counter.reducer';
import classes from './Counter.module.css';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const toggleCounter = useSelector(state => state.counter.toggleCounter);
  const dispatch = useDispatch();

  const decrementHandler = () => {
    dispatch(counterSlice.actions.decrement());
  };
  const incrementHandler = () => {
    dispatch(counterSlice.actions.increment());
  };
  const incrementBy5Handler = () => {
    dispatch(counterSlice.actions.incrementBy5(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterSlice.actions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCounter && (
        <Fragment>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={incrementBy5Handler}>Increment 5</button>
            <button onClick={incrementHandler}>Increment</button>
          </div>
        </Fragment>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
