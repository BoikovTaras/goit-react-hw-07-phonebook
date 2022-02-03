import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('input/Add');
const deleteContact = createAction('input/Delete');
const filterContact = createAction('input/Filter');

export default { addContact, deleteContact, filterContact };
