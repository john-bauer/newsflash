<template>
  <div>
    <form @submit.prevent="handleSubmit()">
      <b-field>
        <b-input v-model="keywords" type="search"></b-input>
      </b-field>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "searchPageToolbar",
  data() {
    return {
      keywords: null
    };
  },
  methods: {
    ...mapActions("news", ["getSearchResults"]),
    handleSubmit() {
      let searchQuery = {
        keywords: this.keywords,
        filter: "top-headlines",
        sort: "popularity"
      };
      this.$router.push({
        path: "/search",
        query: searchQuery
      });
      this.getSearchResults(searchQuery);
    }
  }
};
</script>

<style scoped lang="scss"></style>
