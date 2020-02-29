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
      keywords: null,
      filter: "top-headlines",
      sort: "popularity"
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
