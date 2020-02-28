<template>
  <b-navbar fixed-top shadow>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src="@/assets/svg/01.svg" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item>
        <form @submit.prevent="handleSubmit()">
          <b-field>
            <b-input v-model="keywords"></b-input>
          </b-field>
        </form>
      </b-navbar-item>
    </template>
  </b-navbar>
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

<style scoped lang="scss">
.-has-border-bottom-grey {
  border-bottom: 1px solid #bdbdbd;
}
</style>
