<template>
  <div class="home">
    <div v-if="articlesList">
      {{ articlesList }}
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  computed: {
    ...mapState("news", ["articlesList"])
  },
  methods: {
    ...mapActions("news", ["getSearchResults"])
  },
  mounted() {
    this.getSearchResults("news");
  }
};
</script>
