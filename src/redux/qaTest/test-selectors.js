import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getError = state => state.contacts.error;
export const getFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.isLoading;

export const filteredContactsMemo = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return filter
      ? contacts.filter(contact => {
          if (contact.name) {
            return (
              contact.name.toLowerCase().includes(filter) ||
              contact.number.toLowerCase().includes(filter)
            );
          }
          return false;
        })
      : contacts;
  },
);
