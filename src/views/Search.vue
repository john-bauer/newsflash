<template>
  <div>
    <section class="section">
      <div class="container">
        <SearchPageForm />
        <SearchResultsList />
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import SearchResultsList from "@/components/SearchResultsList.vue";
import SearchPageForm from "@/components/SearchPageForm.vue";

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
    SearchPageForm
  }
};
</script>
