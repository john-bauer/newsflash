<template>
  <div>
    search
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Search",
  methods: {
    ...mapActions("news", ["getSearchResults"])
  },
  mounted() {
    this.getSearchResults(this.$router.app.$route.query);
  }
};
</script>
