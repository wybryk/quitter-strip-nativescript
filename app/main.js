import Vue from 'nativescript-vue';
import BookList from './components/books/BookList';
import VueDevtools from 'nativescript-vue-devtools';
import firebase from 'nativescript-plugin-firebase';
import store from './store';

Vue.registerElement('RadListView', () => require('nativescript-ui-listview').RadListView);
firebase.init({
  // Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
  persist: false
  // apiUrl: 'https://quitter-strip.firebaseio.com/'
}).then(
 instance => {
   console.log('firebase.init done');
 },
 error => {
   console.log(`firebase.init error: ${error}`);
 }
);
Vue.prototype.$firebase = firebase;
if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(BookList)])
}).$start()
