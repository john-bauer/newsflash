<template>
  <section class="hero is-large">
    <div class="hero-body">
      <SearchField />
      <NewsApiPlug class="-spacer" />
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
<style scoped lang="scss">
.-spacer {
  margin-top: 56px;
}
</style>
