import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
      currentTime : Date,
      dialog: false,
      contacts:[]
  },
  mutations: {
    ADD_CONTACT(state, payload) {
      state.contacts.push(payload);
    },
    DELETE_CONTACT(state, payload) {
      state.contacts.push(payload);
    },
    EDIT_CONTACT(state, payload) {
      state.contacts.push(payload);
    }
  },
  actions: {
    addContact(context, contact) {
      context.commit("ADD_CONTACT", contact);
    },
    editContact(context, contact) {
      context.commit("EDIT_CONTACT", contact);
    },
    deleteContact(context, contact) {
      context.commit("DELETE_CONTACT", contact);
    }
    
  },
  getters: {
    getCurrentTime: state => {
        state.currentTime = new Date().toLocaleTimeString()
        return state.currentTime
    },
    getContacts(state) {
      return state.contacts;
    }
  },
});