<template>
  <StackLayout orientation="vertical">
    <Label :text="book.title" class="book-item-title"/>
    <Label :text="book.author" class="book-item-author"/>
  </StackLayout>
</template>
<script>
export default {
  name: 'book-item',
  props: {
    book: Object
  }
}
</script>
<style scoped>
  .book-item-title {
    font-size: 16px;
    font-weight: bold;
  }

  .book-item-author {
    font-size: 14px;
  }
</style>