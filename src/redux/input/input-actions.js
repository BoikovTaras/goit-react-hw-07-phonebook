import { createAction } from '@reduxjs/toolkit';

const addContactReqwest = createAction('input/AddContactReqwest');
const addContactSucsess = createAction('input/AddContactSucsess');
const addContactError = createAction('input/AddContactError');

const deleteContactReqwest = createAction('input/DeleteContactReqwest');
const deleteContactSucsess = createAction('input/DeleteContactSucsess');
const deleteContactError = createAction('input/DeleteContactError');

const filterContactReqwest = createAction('input/FilterContactReqwest');
const filterContactSucsess = createAction('input/FilterContactSucsess');
const filterContactError = createAction('input/FilterContactError');

export default {
  addContactReqwest,
  addContactSucsess,
  addContactError,
  deleteContactReqwest,
  deleteContactSucsess,
  deleteContactError,
  filterContactReqwest,
  filterContactSucsess,
  filterContactError,
};
