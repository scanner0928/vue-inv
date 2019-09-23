<template>
  <section class="contentArea" id="blog">
    <div class="tile-row">
      <article class="blogListCard tile-cell" v-for="post in posts" :key="post.id">
        <header>
          <h1 class="tileTitle">{{post.title.rendered}}</h1>
          <p class="excerpt">{{ post.excerpt.rendered }}</p>
        </header>
        <div class="blogListLink">
          <nuxt-link :to="`/works/${post.id}`" class="card-footer-item">Read More</nuxt-link>
        </div>
        <footer class="footerMeta">
          <div class="inner">
            <time>{{post.date}}</time>
          </div>
        </footer>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const posts = await $axios.$get(
      "https://in-visible.net/wp-json/wp/v2/blog"
    );
    return { posts };
  }
};
</script>

<style scoped lang="scss">
.tile-row {
  display: -webkit-flex;
  display: flex;
  -js-display: flex;
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;

  & > * {
    @include MQ(tablet) {
      width: 50%;
    }
    @include MQ(laptop) {
      width: 25%;
    }
  }

  &.tile-col3 > * {
    @include MQ(laptop) {
      width: 33.33%;
    }
  }
}
.blogListCard {
  padding: 1.5rem;
  position: relative;
  background: white;
  line-height: 1.4;
  border-bottom: 1px solid #c0c0c0;

  header {
    padding: 1rem 0 2rem;
  }

  a {
    text-decoration: none;
  }

  .tileTitle {
    font-size: 95%;
    font-weight: bold;
  }

  .excerpt {
    font-size: 80%;
  }

  .footerMeta {
    text-align: right;
    font-size: 80%;

    .inner {
    }

    time {
      color: #999;
    }

    .category span {
      display: inline-block;
      margin-right: 0.5em;

      a {
        color: $mainColor;
        text-decoration: underline;
      }
    }
  }
  @include MQ(tablet) {
    padding-bottom: 2rem;

    .footerMeta {
      position: absolute;
      bottom: 0.5rem;
      right: 1rem;
    }
  }
}
</style>
