<template>
  <div>
    <section class="section">
      <div class="container">
        <SearchForm />
        <ArticlesList />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import ArticlesList from "@/components/search/ArticlesList.vue";
import SearchForm from "@/components/search/SearchForm.vue";

export default {
  name: "Search",
  methods: {
    ...mapActions("news", ["getSearchResults"]),
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
  mounted() {
    this.getSearchResults(this.$router.app.$route.query);
  },
  watch: {
    $route: function() {
      this.getSearchResults(this.$router.app.$route.query);
      this.scrollToTop();
    }
  },
  components: {
    ArticlesList,
    SearchForm
  }
};
</script>
