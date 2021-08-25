/* eslint-disable import/no-anonymous-default-export */
import types from './contacts-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction(types.ADD_CONTACT, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction(types.DELETE_CONTACT);
 const addFilter = createAction(types.ADD_FILTER);

export default { addContact, deleteContact, addFilter };

