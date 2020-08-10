<template>
  <StackLayout class="book-details">
    <FlexboxLayout>
      <StackLayout class="layout-half-width">
        <Label text="Tytuł" class="label-light"/>
        <Label :text="book.title" class="label-bold"/>
      </StackLayout>
      <StackLayout class="layout-half-width">
        <Label text="Autor" class="label-light"/>
        <Label :text="book.author" class="label-bold"/>
      </StackLayout>
    </FlexboxLayout>
    <StackLayout>
      <Label text="Status" class="label-light"/>
      <Label :text="book.state" class="label-bold"/>
    </StackLayout>
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