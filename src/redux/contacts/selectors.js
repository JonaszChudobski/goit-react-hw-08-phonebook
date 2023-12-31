import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';

export const selectContact = state => state.contacts;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContact, selectFilter],
  (contacts, filter) => {
    if (filter.filter !== '') {
      let filtered = contacts.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.filter.toLowerCase())
      );
      return filtered;
    } else {
      return contacts.contacts;
    }
  }
);
