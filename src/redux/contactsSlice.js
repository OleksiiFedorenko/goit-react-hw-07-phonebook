import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { initContacts } from './initial';
import { fetchContacts, addContact, deleteContact } from './operations';
import {
  thunksStatuses,
  handleFetch,
  handleAdd,
  handleDelete,
  handlePending,
  handleSuccess,
  handleError,
} from './handlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initContacts,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetch)
      .addCase(addContact.fulfilled, handleAdd)
      .addCase(deleteContact.fulfilled, handleDelete)
      .addMatcher(isAnyOf(...thunksStatuses('pending')), handlePending)
      .addMatcher(isAnyOf(...thunksStatuses('fulfilled')), handleSuccess)
      .addMatcher(isAnyOf(...thunksStatuses('rejected')), handleError);
  },
});

export const contactsReducer = contactsSlice.reducer;
