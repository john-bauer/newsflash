<template>
  <div>
    <!-- TODO: clean up these conditionals, possibly set up more statuses in store -->
    <div v-if="articlesList">
      <div v-if="articlesList.length > 0">
        <div v-for="article in articlesList" :key="article.index">
          <SearchResultItem
            :title="article.title"
            :urlToImage="article.urlToImage"
            :url="article.url"
            :sourceName="article.source.name"
            :content="article.content"
            :publishedAt="article.publishedAt"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SearchResultItem from "@/components/SearchResultItem.vue";

export default {
  name: "SearchResultsList",
  computed: {
    ...mapState("news", ["articlesList", "status"])
  },
  methods: {
    goTo(article) {
      window.open(article);
    }
  },
  components: {
    SearchResultItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.-article-title {
  cursor: pointer;
}
</style>
