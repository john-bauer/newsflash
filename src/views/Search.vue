<template>
  <div>
    <SearchPageToolbar />
    <section class="section">
      <div class="container">
        <SearchResultsList />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SearchResultsList from "@/components/SearchResultsList.vue";
import SearchPageToolbar from "@/components/SearchPageToolbar.vue";

export default {
  name: "Search",
  methods: {
    ...mapActions("news", ["getSearchResults"])
  },
  mounted() {
    this.getSearchResults(this.$router.app.$route.query);
  },
  components: {
    SearchResultsList,
    SearchPageToolbar
  }
};
</script>
