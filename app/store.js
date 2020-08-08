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
        state: [
          {
            creationDate: '2020-06-05 09:47:03',
            endDate: '2020-06-06 17:12:58',
            name: 'WANTED_TO_READ'
          },
          {
            creationDate: '2020-06-05 09:47:03',
            endDate: '',
            name: 'BORROWED',
            personName: 'Name of person'
          },
        ]
      },
      {
        id: 2,
        title: 'Book title 2',
        author: 'Author name 2',
        description: 'description 2',
        location: 'Location name 2',
        state: [
          {
            creationDate: '2020-06-05 09:47:03',
            endDate: '2020-06-06 17:12:58',
            name: 'WANTED_TO_READ'
          },
          {
            creationDate: '2020-06-05 09:47:03',
            endDate: '',
            name: 'BORROWED',
            personName: 'Name of person'
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
