<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <img src="@/assets/svg/01.svg" class="-logo" />
        <p class="subtitle">
          Explore the latest, most relevant headlines from thousands of sources.
        </p>
        <form @submit.prevent="handleSubmit()">
          <b-field>
            <b-input size="is-medium" v-model="keywords"></b-input>
          </b-field>
        </form>
      </div>
    </div>
  </section>
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
          sort: "everything",
          page: "1",
          country: "us"
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
