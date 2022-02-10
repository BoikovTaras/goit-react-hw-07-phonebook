import { configureStore } from '@reduxjs/toolkit';
import inputReduser from './input/input-reduser';
import { contactApi } from './contacts/contactsSlise';
// import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    app: inputReduser,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactApi.middleware),

  devTools: process.env.NODE_ENV === 'development',
});

// setupListeners(store.dispatch);
