import { createAction } from '@reduxjs/toolkit';

const addContactReqwest = createAction('input/AddContactReqwest');
const addContactSucsess = createAction('input/AddContactSucsess');
const addContactError = createAction('input/AddContactError');

const deleteContact = createAction('input/Delete');
const filterContact = createAction('input/Filter');

export default {
  addContactReqwest,
  addContactSucsess,
  addContactError,
  deleteContact,
  filterContact,
};
