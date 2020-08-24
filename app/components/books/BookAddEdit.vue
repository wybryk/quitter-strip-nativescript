<template>
<Page>
  <ActionBar>
    <NavigationButton @tap="$navigateBack()" android.systemIcon="ic_menu_back"/>
    <Label v-if="editMode" text="Edit book" horizontalAlignment="center"/>
    <Label v-else text="Add new book" horizontalAlignment="center" class="action-bar-title"/>
  </ActionBar>
  <DockLayout>
    <StackLayout dock="top" height="90%">
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
        <TextField v-model="bookData.location" hint="location"  class="book-textfield"/>
      </StackLayout>
      <StackLayout class="book-row">
        <StackLayout class="book-row-with-drop-down">
          <DropDown class="book-textfield"
                  itemsTextAlignment="center"
                  :items="initialStates"
                  hint="initial state"
                  v-model="bookData.state"
                  @selectedIndexChanged="onchange($event)"
                  @opened="onopen()"
                  @closed="onclose()"
                  itemsPadding="5">
          </DropDown>
        </StackLayout>
        <Label class="textfield-bottom-border"></Label>
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
    },
    initialStates() {
      return ['IN_LIBRARY', 'WANTED_TO_READ', 'READING_NOW', 'READED'];
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
        this.addBook(this.bookData);
      }
      this.$navigateTo(BookList);
    },
    onchange(args) {
        console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
    },
    onopen() {
        console.log("Drop Down opened.");
    },
    onclose() {
        console.log("Drop Down closed.");
    }
  }
}
</script>