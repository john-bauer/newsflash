<template>
  <div v-if="articlesData">
    <b-pagination
      :total="total"
      :current.sync="current"
      :range-before="rangeBefore"
      :range-after="rangeAfter"
      :order="order"
      :size="size"
      :simple="isSimple"
      :rounded="isRounded"
      :per-page="perPage"
      :icon-prev="prevIcon"
      :icon-next="nextIcon"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
    </b-pagination>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ArticlePagination",
  data() {
    return {
      perPage: 20,
      rangeBefore: 3,
      rangeAfter: 1,
      order: "",
      size: "",
      isSimple: false,
      isRounded: true,
      prevIcon: "chevron-left",
      nextIcon: "chevron-right"
    };
  },
  computed: {
    ...mapState("news", ["articlesData", "currentPage"]),
    total: function() {
      return Math.ceil(this.articlesData.totalResults / 20);
    },
    current: function() {
      return parseInt(this.$router.currentRoute.query.page);
    }
  }
};
</script>

<style scoped lang="scss"></style>
