import { createSlice } from '@reduxjs/toolkit';

const INITIAL_COUNT_STATE = {
  counter: 0,
  toggleCounter: true,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: INITIAL_COUNT_STATE,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementBy5(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.toggleCounter = !state.toggleCounter;
    },
  },
});

export default counterSlice;

// const countReducer = (state = INITIAL_COUNT_STATE, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case 'INCREMENT_BY_5':
//       return {
//         ...state,
//         counter: state.counter + action.payload,
//       };
//     case 'DECREMENT':
//       return {
//         ...state,
//         counter: state.counter - 1,
//       };
//     case 'TOGGLE_COUNTER':
//       return {
//         ...state,
//         toggleCounter: !state.toggleCounter,
//       };

//     default:
//       return state;
//   }
// };
// export default countReducer;
