<template>
  <div>
    <!-- DESKTOP VERSION -->
    <article class="media box is-hidden-mobile">
      <figure class="media-left">
        <p class="image is-128x128" v-if="urlToImage">
          <img :src="urlToImage" />
        </p>
        <p class="image is-128x128" v-else-if="!urlToImage">
          <img src="@/assets/img/no-image-available.jpg" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <p class="is-size-7 is-lowercase has-text-grey">
            {{ sourceName }}
            <br />
            <span
              class="has-text-link is-size-6 has-text-weight-semibold -article-title is-capitalized"
              @click="goTo(url)"
            >
              {{ title }}
            </span>
            <br />
            <span class="subtitle is-size-6 is-size-7-touch">
              {{ description }}
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
    <!-- TOUCH VERSION -->
    <article class="media box is-hidden-tablet is-hidden-desktop">
      <div class="media-content">
        <div class="content">
          <p class="image is-3x1" v-if="urlToImage">
            <img :src="urlToImage" class="-image" />
          </p>
          <p class="image is-3x1" v-else-if="!urlToImage">
            <img src="@/assets/img/no-image-available.jpg" class="-image" />
          </p>
          <p class="is-size-7 is-lowercase has-text-grey">
            {{ sourceName }}
            <br />
            <span
              class="has-text-link is-size-6 has-text-weight-semibold -article-title is-capitalized"
              @click="goTo(url)"
            >
              {{ title }}
            </span>
            <br />
            <span class="subtitle is-size-6 is-size-7-touch">
              {{ description }}
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
  </div>
</template>

<script>
export default {
  name: "ArticlesList",
  props: {
    title: String,
    urlToImage: String,
    sourceName: String,
    url: String,
    description: String,
    publishedAt: String,
    country: String
  },
  methods: {
    goTo(article) {
      window.open(article);
    }
  }
};
</script>

<style scoped lang="scss">
.-image {
  border-radius: 6px;
}

.-article-title {
  cursor: pointer;
}
</style>
