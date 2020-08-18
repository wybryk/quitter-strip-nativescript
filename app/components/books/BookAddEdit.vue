<template>
<Page>
  <ActionBar>
    <NavigationButton @tap="$navigateBack()" android.systemIcon="ic_menu_back"/>
    <Label v-if="editMode" text="Edit book" horizontalAlignment="center"/>
    <Label v-else text="Add new book" horizontalAlignment="center"/>
  </ActionBar>
  <DockLayout>
    <StackLayout dock="top" height="90%">
      <StackLayout class="book-row">
        <TextField v-model="bookData.id" hint="id" class="book-textfield"/>
      </StackLayout>
      <StackLayout class="book-row">
        <TextField v-model="bookData.title" hint="title"  class="book-textfield"/>
      </StackLayout>
      <StackLayout class="book-row">
        <TextField v-model="bookData.author" hint="author"  class="book-textfield"/>
      </StackLayout>
      <StackLayout class="book-row">
        <TextView v-model="bookData.description" hint="description"  class="book-textfield"/>
      </StackLayout>
      <StackLayout class="book-row">
        <TextField text="ocena" hint="rate"  class="book-textfield"/>
      </StackLayout>
      <StackLayout class="book-row">
        <TextField v-model="bookData.location" hint="location"  class="book-textfield"/>
      </StackLayout>
    </StackLayout>
    <StackLayout dock="bottom" row="1" orientation="horizontal">
      <Button text="Zapisz"
        textWrap="true"
        textAlignment="text"
        class="book-button"
        @tap="onAddEditButtonTap">
      </Button>
    </StackLayout>
  </DockLayout>
</Page>
</template>
<script>
import {mapActions} from 'vuex';
import BookList from './BookList';

export default {
  name: 'book-add-edit',
  props: {
    book: Object
  },
  computed: {
    bookData() {
      return this.book || {};
    },
    editMode() {
      return !!this.book;
    }
  },
  methods: {
    ...mapActions({
      addBook: 'addBook',
      updateBook: 'updateBook'
    }),
    onAddEditButtonTap() {
      if (this.editMode) {
        this.updateBook(this.bookData);
      } else {
        this.bookData.creationDate = new Date().toISOString();
        this.bookData.state = 'IN_LIBRARY';
        this.addBook(this.bookData);
      }
      this.$navigateTo(BookList);
    }
  }
}
</script>