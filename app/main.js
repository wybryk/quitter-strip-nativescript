import Vue from 'nativescript-vue';
import BookList from './components/books/BookList';
import VueDevtools from 'nativescript-vue-devtools';
import RadListView from 'nativescript-ui-listview/vue';

Vue.use(RadListView);

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
import store from './store'

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')


new Vue({
  store,
  render: h => h('frame', [h(BookList)])
}).$start()
