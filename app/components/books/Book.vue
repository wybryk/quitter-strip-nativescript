<template>
<Page>
  <ActionBar>
    <NavigationButton @tap="$navigateBack()" android.systemIcon="ic_menu_back"/>
    <Label :text="bookData.title" horizontalAlignment="center"/>
    <!-- <ActionItem @tap="onEditButtonTap" android.position="right" ios.position="right">
                <Label text="Edit" verticalAlignment="center"/>
    </ActionItem> -->
  </ActionBar>
  <ScrollView>
    <StackLayout backgroundColor="#3c495e">
      <Label :text="bookData.author"/>
    </StackLayout>
  </ScrollView>
</Page>
</template>
<script>
export default {
  name: 'book',
  props: {
    book: Object
  },
  computed: {
    bookData() {
      return this.book || {};
    }
  }
}
</script>
<style scoped>

</style>