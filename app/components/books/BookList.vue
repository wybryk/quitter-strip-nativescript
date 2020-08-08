<template>
<Page>
  <ActionBar>
    <Label horizontalAlignment="center" text="Car List"/>
  </ActionBar>
  
  <AbsoluteLayout backgroundColor="#3c495e">
    <Label class="message" :text="msg" col="0" row="0"/>
    <RadListView for="book in books" @itemTap="onItemTap" style="height:75%">
      <v-template>
        <ListViewLinearLayout scrollDirection="Vertical" v-tkListViewLayout/>
        <Book-item :book="book"></Book-item>
      </v-template>
    </RadListView>
  </AbsoluteLayout>
</Page>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
import BookItem from './BookItem';
import Book from './Book';

export default {
  name: 'books',
  computed: {
    ...mapGetters([
      'books'
    ])
  },
  methods: {
    ...mapActions({
      loadBooks: 'loadBooks',
      addBook: 'addBook',
      updateBook: 'updateBook'
    }),
    onItemTap(event) {
      console.log(event.item);
      this.$navigateTo(Book, {props: {book: event.item}});
    }
  },
  components: {
    BookItem
  }
}
</script>
<style scoped>

</style>