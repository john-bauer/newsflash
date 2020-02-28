<template>
  <section class="section">
    <div class="container">
      <SearchResultsList />
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import SearchResultsList from "@/components/SearchResultsList.vue";

export default {
  name: "Search",
  methods: {
    ...mapActions("news", ["getSearchResults"])
  },
  mounted() {
    this.getSearchResults(this.$router.app.$route.query);
  },
  components: {
    SearchResultsList
  }
};
</script>
