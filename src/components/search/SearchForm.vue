<template>
  <div>
    <form @submit.prevent="handleSubmit()">
      <b-field>
        <b-input
          size="is-medium"
          expanded
          placeholder="Search by Keyword"
          v-model="keywords"
          type="search"
        ></b-input>
        <p class="control">
          <span
            class="button is-medium is-rounded is-primary"
            @click="handleSubmit()"
            ><span class="icon"><i class="mdi mdi-magnify"></i></span
          ></span>
        </p>
      </b-field>
      <b-field>
        <b-select
          v-model="filter"
          size="is-small"
          icon="filter"
          @input="handleSubmit"
        >
          <option value="everything">Everything</option>
          <option value="top-headlines">Top Headlines</option>
        </b-select>
        <b-select
          v-model="sort"
          icon="sort"
          size="is-small"
          @input="handleSubmit"
        >
          <option value="popularity">Popularity</option>
          <option value="relevancy">Relevance</option>
          <option value="latest">Latest</option>
        </b-select>
        <b-select
          v-model="country"
          icon="earth"
          @input="handleSubmit"
          size="is-small"
        >
          <option value="">All</option>
          <option value="us">United States</option>
          <option value="fr">France</option>
          <option value="es">Spain</option>
          <option value="de">Germany</option>
        </b-select>
      </b-field>
    </form>
  </div>
</template>

<script>
export default {
  name: "searchPageToolbar",
  data() {
    return {
      keywords: this.$router.currentRoute.query.keywords,
      filter: this.$router.currentRoute.query.filter,
      sort: this.$router.currentRoute.query.sort,
      page: this.$router.currentRoute.query.page,
      country: this.$router.currentRoute.query.country
    };
  },
  methods: {
    handleSubmit() {
      let searchQuery = {
        keywords: this.keywords,
        filter: this.filter,
        sort: this.sort,
        page: this.page,
        country: this.country
      };
      this.$router.push({
        path: "/search",
        query: searchQuery
      });
    }
  },
  watch: {
    $route() {
      this.keywords = this.$router.currentRoute.query.keywords;
      this.filter = this.$router.currentRoute.query.filter;
      this.sort = this.$router.currentRoute.query.sort;
      this.page = this.$router.currentRoute.query.page;
      this.country = this.$router.currentRoute.query.country;
    }
  }
};
</script>

<style scoped lang="scss"></style>
