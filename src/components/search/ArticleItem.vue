<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-96x96" v-if="urlToImage">
        <img :src="urlToImage" />
      </p>
      <p class="image is-96x96" v-else-if="!urlToImage">
        <img src="@/assets/img/no-image-available.jpg" />
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p class="is-size-7 is-lowercase has-text-grey">
          {{ sourceName }}
          <br />
          <span
            class="has-text-link is-size-6 has-text-weight-semibold -article-title"
            @click="goTo(url)"
          >
            {{ title }}
          </span>
          <br />
          <span class="subtitle is-size-6 is-size-7-touch">
            {{ content }}
          </span>
        </p>
      </div>
      <div class="level is-mobile">
        <div class="level-left">
          <div class="level-item">
            <span class="is-size-7">
              {{ publishedAt | moment("ddd, MMM do YYYY, h:mm a") }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "ArticlesList",
  props: {
    title: String,
    urlToImage: String,
    sourceName: String,
    url: String,
    content: String,
    publishedAt: String
  },
  methods: {
    goTo(article) {
      window.open(article);
    }
  }
};
</script>

<style scoped lang="scss"></style>
