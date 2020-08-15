import Vue from 'nativescript-vue';
import BookList from './components/books/BookList';
import VueDevtools from 'nativescript-vue-devtools';
import store from './store';

Vue.registerElement('RadListView', () => require('nativescript-ui-listview').RadListView);

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(BookList)])
}).$start()
