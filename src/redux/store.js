import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersreducer from './filtersSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersreducer,
  },
});
