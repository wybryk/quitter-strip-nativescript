<template>
<Page>
  <ActionBar>
    <NavigationButton @tap="$navigateBack()" android.systemIcon="ic_menu_back"/>
    <Label text="Szczegóły książki" horizontalAlignment="center" class="action-bar-title"/>
    <ActionItem @tap="onEditButtonTap" android.systemIcon="ic_menu_edit" android.position="right"/>
  </ActionBar>
  <ScrollView>
    <StackLayout>
      <StackLayout class="book-details">
        <FlexboxLayout>
          <StackLayout class="layout-half-width">
            <Label text="Tytuł" class="label-light"/>
            <Label :text="bookData.title" class="label-bold"/>
          </StackLayout>
          <StackLayout class="layout-half-width">
            <Label text="Autor" class="label-light"/>
            <Label :text="bookData.author" class="label-bold"/>
          </StackLayout>
        </FlexboxLayout>
        <FlexboxLayout>
          <StackLayout class="layout-half-width">
            <Label text="Status" class="label-light"/>
            <Label :text="book.state" class="label-bold"/>
          </StackLayout>
          <StackLayout class="layout-half-width">
            <Label text="Data dodania" class="label-light"/>
            <Label :text="formatDate(book.creationDate)" class="label-bold"/>
          </StackLayout>
        </FlexboxLayout>
        <StackLayout v-if="!!bookData.description">
          <Label text="Opis" class="label-light"/>
          <Label :text="bookData.description" class="label-bold"/>
        </StackLayout>
      </StackLayout>
      <StackLayout class="book-details book-details-status-list-container">
        <Label text="Historia" class="label-bold"/>
        <StackLayout v-for="state in bookData.states" class="book-details-status-list-item">
          <Label :text="state.name"  class="label-bold"/>
          <FlexboxLayout>
            <Label :text="formatDate(state.creationDate)" class="label-light"/>
            <Label v-if="!!state.endDate" text=" - " class="label-light"/>
            <Label v-if="!!state.endDate" :text="formatDate(state.endDate)" class="label-light"/>
          </FlexboxLayout>
        </StackLayout>
      </StackLayout>
    </StackLayout>
  </ScrollView>
</Page>
</template>
<script>
import BookAddEdit from './BookAddEdit';

export default {
  name: 'book',
  props: {
    book: Object
  },
  computed: {
    bookData() {
      return this.book || {};
    }
  },
  methods: {
    onEditButtonTap() {
      this.$navigateTo(BookAddEdit, {props: {book: this.bookData}});
    },
    findLastBookState() {
      return this.bookData.states.reduce((a, b) => {return new Date(a.creationDate) > new Date(b.creationDate) ? a : b});
    },
    getPersonName(state) {
      return state.name === 'BORROWED' ? state.personName : '';
    },
    getEndDate(endDate) {
      return !!endDate ? endDate : 'current';
    },
    formatDate(value) {
       if (!value) {
        return '';
      }
      return `${value.replace(/T/, ' ').replace(/\..+/, '').replace(/Z/, '')}`;
    }
  }
}
</script>