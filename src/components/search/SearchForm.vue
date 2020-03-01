<template>
  <div>
    <form @submit.prevent="handleSubmit()">
      <b-field>
        <b-input
          expanded
          rounded
          placeholder="Search by Keyword"
          v-model="keywords"
          type="search"
        ></b-input>
        <p class="control">
          <span class="button is-rounded is-primary" @click="handleSubmit()"
            ><span class="icon"><i class="mdi mdi-magnify"></i></span
          ></span>
        </p>
      </b-field>
      <b-field>
        <b-select rounded v-model="filter">
          <option value="top-headlines">Top Headlines</option>
          <option value="everything">Everything</option>
        </b-select>
        <b-select rounded v-model="sort">
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
      sort: this.$router.currentRoute.query.sort,
      page: this.$router.currentRoute.query.page
    };
  },
  methods: {
    ...mapActions("news", ["getSearchResults"]),
    handleSubmit() {
      let searchQuery = {
        keywords: this.keywords,
        filter: this.filter,
        sort: this.sort,
        page: 1
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
