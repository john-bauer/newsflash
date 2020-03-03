<template>
  <div>
    <div v-if="articlesData">
      <div class="has-margin-top-5 has-margin-bottom-15">
        <span class="is-size-7 is-italic">
          {{ articlesData.totalResults }} total results for "{{
            this.$router.currentRoute.query.keywords
          }}"</span
        >
      </div>
      <div v-for="article in articlesData.articles" :key="article.index">
        <ArticleItem
          :title="article.title"
          :urlToImage="article.urlToImage"
          :url="article.url"
          :sourceName="article.source.name"
          :description="article.description"
          :publishedAt="article.publishedAt"
        />
      </div>
    </div>
    <ArticlePagination />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ArticleItem from "@/components/search/ArticleItem.vue";
import ArticlePagination from "@/components/search/ArticlePagination.vue";

export default {
  name: "ArticlesList",
  computed: {
    ...mapState("news", ["articlesData"])
  },
  components: {
    ArticleItem,
    ArticlePagination
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
