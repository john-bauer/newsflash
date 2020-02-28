<template>
  <div class="home">
    <b-button @click="simulateSearch">SIMULATE SEARCHING</b-button>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {},
  methods: {
    simulateSearch() {
      this.$router.push({
        path: "/search",
        query: {
          keywords: "apple",
          filter: "top-headlines",
          sort: "popularity"
        }
        // keyword can be anything, filter can be either everything or top-headlines,
        // sort can be relevancy, popularity, publishedAt
      });
    }
  }
};
</script>
