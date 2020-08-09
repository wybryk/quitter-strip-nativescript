<template>
<Page>
  <ActionBar>
    <NavigationButton @tap="$navigateBack()" android.systemIcon="ic_menu_back"/>
    <Label :text="bookData.title" horizontalAlignment="center"/>
    <ActionItem @tap="onEditButtonTap" android.position="right" ios.position="right">
      <Label text="Edit" verticalAlignment="center"/>
    </ActionItem>
  </ActionBar>
  <ScrollView>
    <StackLayout>
      <Label :text="bookData.author"/>
      <Label :text="bookData.description"/>
      <Label text="ocena"/>
      <Label :text="bookData.location"/>
      <Label :text="bookData.name"/>
      <Label :text="bookData.creationDate"/>
      <StackLayout>
        <Label :text="formatState(state)" v-for="state in bookData.states"/>
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
    formatState(state) {
      return `${state.name} ${this.getPersonName(state)} (${state.creationDate} - ${this.getEndDate(state.endDate)})`;
    },
    getPersonName(state) {
      return state.name === 'BORROWED' ? state.personName : '';
    },
    getEndDate(endDate) {
      return !!endDate ? endDate : 'current';
    }
  }
}
</script>