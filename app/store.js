import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [
      {
        id: 1,
        title: 'Book title',
        author: 'Author name',
        description: 'description',
        location: 'Location name',
        state: 'BORROWED',
        creationDate: '2018-01-01T09:47:03Z',
        states: [
          {
            creationDate: '2020-06-05T09:47:03Z',
            endDate: '2020-06-06T17:12:58Z',
            name: 'WANTED_TO_READ'
          },
          {
            creationDate: '2020-06-06T18:47:03Z',
            endDate: '2020-07-01T18:47:03Z',
            name: 'BORROWED',
            personName: 'Name of person'
          },
          {
            creationDate: '2020-08-06T06:47:03Z',
            endDate: '',
            name: 'BORROWED',
            personName: 'Name of person 2'
          }
        ]
      },
      {
        id: 2,
        title: 'Book title 2',
        author: 'Author name 2',
        description: 'description 2',
        location: 'Location name 2',
        state: 'READED',
        creationDate: '2020-06-01T09:47:03Z',
        states: [
          {
            creationDate: '2020-06-05T09:47:03Z',
            endDate: '2020-06-06T17:12:58Z',
            name: 'WANTED_TO_READ'
          },
          {
            creationDate: '2021-06-05T09:47:03Z',
            endDate: '',
            name: 'READED'
          }
        ]
      }
    ],
    bookStates: ['WANTED_TO_READ', 'READING_NOW', 'READED', 'BORROWED', 'REMOVED']
  },
  mutations: {
    setBooks(state, books) {
      state.books = books;
    },
    addBook(state, book) {
      state.books.push(book);
    },
    updateBook(state, book) {
      state.books.forEach((value) => {
        if (book.id === value.id) {
          Object.assign(value, book);
        }
      });
    }
  },
  actions: {
    loadBooks: ({commit}) => {
      // Todo http
    },
    addBook: ({commit}, book) => {
      // Todo http
      commit('addBook', book);
    },
    updateBook: ({commit}, book) => {
      // Todo http
      commit('updateBook', book);
    }
  },
  getters: {
    books: state => state.books
  }
});
