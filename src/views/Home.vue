<template>
  <section class="hero is-medium">
    <div class="hero-body">
      <SearchField class="has-margin-bottom-50" />
      <NewsApiPlug />
    </div>
  </section>
</template>

<script>
import SearchField from "@/components/home/SearchField.vue";
import NewsApiPlug from "@/components/home/NewsApiPlug.vue";

export default {
  name: "Home",
  components: {
    SearchField,
    NewsApiPlug
  }
};
</script>
<style scoped lang="scss"></style>
