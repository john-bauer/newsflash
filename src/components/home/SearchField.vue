<template>
  <div class="has-text-centered">
    <img src="@/assets/svg/01.svg" class="-logo" />
    <p class="subtitle">
      Explore the latest, most relevant headlines from thousands of sources.
    </p>
    <form @submit.prevent="handleSubmit()">
      <b-field>
        <b-input
          size="is-medium"
          v-model="keywords"
          placeholder="Search by Keyword"
        ></b-input>
      </b-field>
    </form>
  </div>
</template>
<script>
export default {
  name: "SearchField",
  data() {
    return {
      keywords: null
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push({
        path: "/search",
        query: {
          keywords: this.keywords,
          filter: "top-headlines",
          sort: "popularity",
          page: "1",
          country: ""
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.-logo {
  height: 64px;
  width: auto;
}
</style>
