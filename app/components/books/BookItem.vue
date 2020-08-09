<template>
  <StackLayout orientation="vertical" class="book-item" border="solid 5px white">
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