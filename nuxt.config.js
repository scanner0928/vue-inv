const apiURL = 'https://in-visible.net/wp-json/wp/v2/'
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'vue-inv',
    titleTemplate: '%s | in-visible.net',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  generate: {
    routes(callback) {
      axios.get(`${apiURL}blog`).then(response => {
        // WordPressの総記事数を取得
        const totalPosts = response.headers['x-wp-total']

        // 記事、カテゴリー、タグなどを取得
        Promise.all([
          axios.get(`${apiURL}blog?per_page=${totalPosts}`),

          // 下記はカテゴリーページも作る例
          axios.get(`${apiURL}categories`)
        ])
          .then(axios.spread(function (posts, categories) {
            let routes1 = posts.data.map((post) => {
              return {
                route: `/blog/${post.id}`,
                payload: post
              }
            })

            let routes2 = categories.data.map((category) => {
              return `/blog/category/${category.slug}`
            })

            callback(null, routes1.concat(routes2))
          }))
      })
    }
  },
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/axios'
  ],
  axios: {
    baseURL: apiURL
  },
  styleResources: {
    scss: [
      './assets/sass/_vars.scss',
      './assets/sass/base/_reset.scss',
      './assets/sass/base/_gm_reset.scss',
      './assets/sass/base/_functions.scss',
      // './assets/sass/base/*.scss',
    ]
  }
}

