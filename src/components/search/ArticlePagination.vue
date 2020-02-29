<template>
  <div v-if="articlesData">
    <span>{{ articlesData.totalResults }}</span>
    <br />
    <span>{{ Math.ceil(articlesData.totalResults / 20) }}</span>
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
      total: 200,
      current: 1,
      perPage: 10,
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
    ...mapState("news", ["articlesData"])
  }
};
</script>

<style scoped lang="scss"></style>
