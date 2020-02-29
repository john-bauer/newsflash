<template>
  <div v-if="articlesData">
    {{ articlesData.totalResults }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ArticlePagination",
  computed: {
    ...mapState("news", ["articlesData"])
  }
};
</script>

<style scoped lang="scss"></style>
