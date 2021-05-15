
export default {
  server: {
    port: 3004, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_displayName || 'Metrix Coin',
    titleTemplate: (process.env.npm_package_displayName ? process.env.npm_package_displayName : 'Metrix Coin') + '- %s',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        name: 'msapplication-TileColor',
        content: '#fff'
      },
      {
        name: 'theme-color',
        content: '#f2f2f2'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: process.env.npm_package_displayName || 'Metrix Coin'
      },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://www.metrixcoin.com'
      },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      {
        hid: 'twitter:site',
        name: 'twitter:site',
        content: '@metrixcoin'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@metrixcoin'
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: '/img/metrix-og-banner.jpg'
      },
      {
        hid: 'og:image:url',
        name: 'og:image:url',
        content: '/img/metrix-og-banner.jpg'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/img/metrix-og-banner.jpg'
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Metrix Coin - A Powerful, Secure PoS Crypto-Currency'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Metrix Coin - A Powerful, Secure PoS Crypto-Currency'
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content: process.env.npm_package_description || 'Metrix is a digital asset focusing on widespread adoption and creating ease-of-use applications. The Metrix team is dedicated to building a diverse network of vendors and working applications all powered by the use of our digital asset.'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: process.env.npm_package_description || 'Metrix is a digital asset focusing on widespread adoption and creating ease-of-use applications. The Metrix team is dedicated to building a diverse network of vendors and working applications all powered by the use of our digital asset.'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'Metrix is a digital asset focusing on widespread adoption and creating ease-of-use applications. The Metrix team is dedicated to building a diverse network of vendors and working applications all powered by the use of our digital asset.'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' }
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-latest.min.js',
        async: true,
        crossorigin: 'anonymous'
      },
      {
        src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
        async: true,
        crossorigin: 'anonymous'
      }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/styles.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
