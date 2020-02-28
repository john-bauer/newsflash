<template>
  <div>
    {{ articlesList }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SearchResultsList",
  computed: {
    ...mapState("news", ["articlesList"])
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
