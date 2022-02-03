import { configureStore } from '@reduxjs/toolkit';
import inputReduser from './input/input-reduser';

const store = configureStore({
  reducer: {
    app: inputReduser,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
