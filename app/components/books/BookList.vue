<template>
<Page>
  <ActionBar>
    <Label horizontalAlignment="center" text="Book List"/>
  </ActionBar>

  <DockLayout>
    <ScrollView dock="top" height="90%">
      <RadListView for="book in books" @itemTap="onItemTap" width="100%">
        <v-template>
          <Book-item :book="book"></Book-item>
        </v-template>
      </RadListView>
    </ScrollView>
    <StackLayout dock="bottom">
      <Button text="Nowy" textWrap="true" textAlignment="text" class="book-new-button" @tap="onAddButtonTap"></Button>
    </StackLayout>
  </DockLayout>
</Page>
</template>
<script>
import {mapActions, mapGetters} from 'vuex';
import BookItem from './BookItem';
import Book from './Book';
import BookAddEdit from './BookAddEdit';

export default {
  name: 'books',
  computed: {
    ...mapGetters([
      'books'
    ])
  },
  methods: {
    ...mapActions({
      loadBooks: 'loadBooks'
    }),
    onItemTap(event) {
      this.$navigateTo(Book, {props: {book: event.item}});
    },
    onAddButtonTap() {
      this.$navigateTo(BookAddEdit);
    }
  },
  components: {
    BookItem
  }
}
</script>