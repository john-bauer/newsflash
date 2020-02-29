<template>
  <div>
    <form @submit.prevent="handleSubmit()">
      <b-field>
        <b-input v-model="keywords" type="search"></b-input>
      </b-field>
      <b-field>
        <b-select v-model="filter">
          <option value="top-headlines">Top Headlines</option>
          <option value="everything">Everything</option>
        </b-select>
      </b-field>
      <b-field>
        <b-select v-model="sort">
          <option value="popularity">Popularity</option>
          <option value="relevancy">Relevance</option>
          <option value="latest">Latest</option>
        </b-select>
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
      keywords: this.$router.currentRoute.query.keywords,
      filter: this.$router.currentRoute.query.filter,
      sort: this.$router.currentRoute.query.sort
    };
  },
  methods: {
    ...mapActions("news", ["getSearchResults"]),
    handleSubmit() {
      let searchQuery = {
        keywords: this.keywords,
        filter: this.filter,
        sort: this.sort
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
