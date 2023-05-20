import { fetchContacts, addContact, deleteContact } from './operations';

const thunks = [fetchContacts, addContact, deleteContact];
export const thunksStatuses = status => thunks.map(thunk => thunk[status]);

export const handleFetch = (state, { payload }) => {
  state.items = payload;
};

export const handleAdd = (state, { payload }) => {
  state.items.push(payload);
};

export const handleDelete = (state, { payload }) => {
  state.items = state.items.filter(contact => contact.id !== payload.id);
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleSuccess = state => {
  state.isLoading = false;
  state.error = false;
};

export const handleError = state => {
  state.isLoading = false;
  state.error = true;
};
