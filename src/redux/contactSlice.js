import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    formSubmitHandler(state, { payload }) {
      // const filterContact = payload.name.toLocaleLowerCase();
      // // console.log(filterContact);
      // const contactsForFind = state.contacts.find(
      //   i => i.name.toLocaleLowerCase() === filterContact
      // );
      // if (contactsForFind) {
      //   window.alert(`${payload.name} is already in contacts`);
      //   return;
      // }
      state.contacts.push(payload);
    },

    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },

    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { formSubmitHandler, changeFilter, deleteContact } =
  contactSlice.actions;
export const contacts = contactSlice.reducer;
