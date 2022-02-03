import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './input-actions';

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
