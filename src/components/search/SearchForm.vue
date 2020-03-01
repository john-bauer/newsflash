<template>
  <div>
    <form @submit.prevent="handleSubmit()">
      <b-field>
        <b-input
          size="is-medium"
          expanded
          rounded
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
        <b-select rounded v-model="filter" @input="handleSubmit">
          <option value="top-headlines">Top Headlines</option>
          <option value="everything">Everything</option>
        </b-select>
        <b-select rounded v-model="sort" @input="handleSubmit">
          <option value="popularity">Popularity</option>
          <option value="relevancy">Relevance</option>
          <option value="latest">Latest</option>
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
        page: this.page
      };
      this.$router.push({
        path: "/search",
        query: searchQuery
      });
    }
  }
};
</script>

<style scoped lang="scss"></style>
