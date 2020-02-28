<template>
  <div v-if="articlesList">
    <div v-for="article in articlesList" :key="article.index">
      <article class="media">
        <figure class="media-left">
          <p class="image is-96x96" v-if="article.urlToImage">
            <img :src="article.urlToImage" />
          </p>
          <p class="image is-96x96" v-else-if="!article.urlToImage">
            <img src="@/assets/img/no-image-available.jpg" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p class="is-size-7 is-lowercase has-text-grey">
              {{ article.source.name }}
              <br />
              <span
                class="has-text-link is-size-6 has-text-weight-semibold -article-title"
                @click="goTo(article.url)"
              >
                {{ article.title }}
              </span>
              <br />
              <span class="subtitle is-size-6 is-size-7-touch">
                {{ article.content }}
              </span>
            </p>
          </div>
          <div class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <span class="is-size-7">
                  {{ article.publishedAt | moment("ddd, MMM do YYYY, h:mm a") }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SearchResultsList",
  computed: {
    ...mapState("news", ["articlesList"])
  },
  methods: {
    goTo(article) {
      window.open(article);
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

.-article-title {
  cursor: pointer;
}
</style>
