<template>
  <article class="blogContentMain">
    <header class="blogHeader">
      <h1 class="blogTitle">{{post.title.rendered}}</h1>
      <p class="blogHeaderMeta"></p>
      <div class="blogListImg img">img</div>
    </header>
    <div class="blogSingleBody">
      <section v-html="post.content.rendered"></section>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: [],
      param: []
    };
  },
  async asyncData({ $axios, params }) {
    const post = await $axios.$get(
      `https://in-visible.net/wp-json/wp/v2/blog/${params.id}`
    );
    return { post };
  }

  // mounted() {
  //   fetch(`https://in-visible.net/wp-json/wp/v2/blog/${this.id}`).then(
  //     response => {
  //       response.json().then(post => {
  //         this.post = post;
  //       });
  //     }
  //   );
  // }
};
</script>

