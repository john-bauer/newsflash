<template>
  <div v-if="articlesData">
    <!-- TODO: Investigate selected page not reflecting current page (possibly use route watcher?) -->
    <b-pagination
      @change="onPageChange"
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
import { mapActions } from "vuex";

export default {
  name: "ArticlePagination",
  data() {
    return {
      current: parseInt(this.$router.currentRoute.query.page),
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
      return this.articlesData.totalResults;
    }
  },
  methods: {
    ...mapActions("news", ["getSearchResults"]),
    onPageChange(page) {
      let searchQuery = {
        filter: this.$router.currentRoute.query.filter,
        keywords: this.$router.currentRoute.query.keywords,
        sort: this.$router.currentRoute.query.sort,
        page: page
      };
      this.getSearchResults(searchQuery);
    }
  }
};
</script>

<style scoped lang="scss"></style>
