import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
import filtersreducer from './filtersSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersreducer,
  },
});
export default store;
