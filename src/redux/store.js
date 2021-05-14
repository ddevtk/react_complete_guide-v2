import { createStore } from 'redux';

const INITIAL_COUNT_STATE = {
  counter: 0,
};

const countReducer = (state = INITIAL_COUNT_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };

    default:
      return state;
  }
};

const store = createStore(countReducer);

export default store;
