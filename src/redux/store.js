import { combineReducers, configureStore } from '@reduxjs/toolkit';
import ReduxLogger from 'redux-logger';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

import storage from 'redux-persist/lib/storage';
import authSlice from './authentication/auth.reducer';
import counterSlice from './counter/counter.reducer';

/////////////////////////////////
// pRootReducer
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['counter'],
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  counter: counterSlice.reducer,
});

const pRootReducer = persistReducer(persistConfig, rootReducer);

/////////////////////////////////
//Storage
const store = configureStore({
  reducer: pRootReducer,
  middleware: [ReduxLogger],
});
const persistor = persistStore(store);

export { store, persistor };
