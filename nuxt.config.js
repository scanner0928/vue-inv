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
    vendor: ['axios'],
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
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios'
  ],
  plugins: [
    '~/plugins/axios'
  ],
  axios: {
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

