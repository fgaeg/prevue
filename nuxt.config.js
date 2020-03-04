// Load dotenv module so .env variables are available
require('dotenv').config();

export default {
  mode: 'universal',
  /*
  Headers of the page
    - Nuxt.js uses vue-meta to update the headers and html attributes of your application.
    - Nuxt.js configures vue-meta with these options:
      {
        // the component option name that vue-meta looks for meta info on.
        keyName: 'head',
        // the attribute name vue-meta adds to the tags it observes
        attribute: 'data-n-head',
        // the attribute name that lets vue-meta know that meta info has already been server-rendered
        ssrAttribute: 'data-n-head-ssr',
        // the property name that vue-meta uses to determine whether to overwrite or append a tag
        tagIDKeyName: 'hid'
      }
  */
  head: {
    // Each key:value maps to the equivalent attribute:value of the <html> element.
    // Example output: <html foo="bar" amp></html>
    htmlAttrs: {
      lang: 'en',
      // foo: 'bar',
      // amp: true
    },
    titleTemplate: '%s | PreVue',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // Since v1.5.0 of vue-meta, you can now set up meta templates that work similar to the titleTemplate:
      // Example output:
      // <meta charset="utf-8">
      // <meta name="og:title" property="og:title" content="Test title - My page">
      // {
      //   'vmid': 'og:title',
      //   'property': 'og:title',
      //   'content': 'Test title',
      //   'template': chunk => `${chunk} - My page`
      //   //or as string template: '%s - My page'
      // },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { property: 'og:type', content: 'website' },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Prevue is a simple example of a pre-rendered Vue website'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content:
          'https://blue.kumparan.com/image/upload/senpz1uqdsvamsf2n1wb.png'
      }
    ],
    // Each key:value maps to the equivalent attribute:value of the <body> element.
    // Example output: <body bar="baz">Foo Bar</body>
    // bodyAttrs: {
    //   bar: 'baz'
    // },
    // unescaping/disable sanitizer for inline script
    __dangerouslyDisableSanitizers: ['script'],
    //
    // Each item in the array maps to a newly-created <script> element,
    // where object properties map to attributes.
    // Example output: <script type="application/ld+json">{ "@context": "http://schema.org" }</script>
    script: [
      {
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org',
          '@type': 'Organization',
          name: 'Prevue',
          unsafe: '<p>Hello World</p>'
        }
      },
      {
        innerHTML: 'console.log("I am in body");',
        body: true
      },
      // sample inline google analytics, instead of plugin
      // but this approach doesn't flexible
      // {
      //   innerHTML: 'window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date; ga("create", "'+ process.env.ID_GOOGLE_ANALYTICS +'", "auto"); ga("send", "pageview");'
      // },
      {
        src: 'https://www.google-analytics.com/analytics.js',
        defer: true
      }
    ],
    //
    // Maps to a newly-created <base> element, where object properties map to attributes.
    // Example output: <base target="_blank" href="/">
    // base: {
    //   target: '_blank',
    //   href: '/'
    // },
    //
    // Each item in the array maps to a newly-created <noscript> element,
    // where object properties map to attributes.
    noscript: [
      { innerHTML: 'This website requires JavaScript.' }
    ],
    //
    // A callback function which is called when vue-meta has updated the metadata after navigation occurred. This can be used to anything (such as track page views) with the updated document
    // afterNavigation(metaInfo) {
    //   trackPageView(document.title)
    //   // is the same as
    //   trackPageView(metaInfo.title)
    // },
    //
    // Will be called when the client metaInfo updates/changes. Receives the following parameters:
    // newInfo | (Object) | The new state of the metaInfo object.
    // addedTags | ([HTMLElement]) | a list of elements that were added.
    // removedTags | ([HTMLElement]) | a list of elements that were removed.
    // changed (newInfo, addedTags, removedTags) {
    //   console.log('Meta info was updated!')
    // },
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff', throttle: 0 },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/head' }, // process for both
    { src: '~/plugins/ga.js', mode: 'client' } // client only processing
    // or like this within file naming
    // { src: '~/plugins/ga.client.js' }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    // custom configuration
    hostname: process.env.BASE_URL,
    gzip: true,
    exclude: [
      '/404',
      '/sample'
    ],
  },
  robots: {
    /* module options */
    sitemap: process.env.BASE_URL + '/sitemap.xml',
    UserAgent: '*',
    Disallow: '/'
  },
  tailwindcss: {
    // configPath: '~/config/tailwind.config.js',
    // cssPath: '~/assets/css/tailwind.css',
    purgeCSSInDev: true
  },
  purgeCSS: {
    whitelist: ["html", "body"],
    // targetting class containing "nuxt", only for 1 level
    // whitelistPatterns: [/\b(\w*nuxt\w*)\b/],
    whitelistPatternsChildren: [/\b(\w*nuxt\w*)\b/, /^v-/, /^token/, /^pre/, /^code/]
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Generate configuration
   */
  generate: {},
  /*
   ** Build configuration
   */
  build: {
    /* You can extend webpack config here */
    // extract css, rather than inline
    extractCSS: true,
    // extracting every css into a single file
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       styles: {
    //         name: 'styles',
    //         test: /\.(css|vue)$/,
    //         chunks: 'all',
    //         enforce: true
    //       }
    //     }
    //   }
    // },
    // changes fancy chunk names to name and hash
    filenames: {
      css: ({ isDev }) => isDev ? 'css/[name].css' : 'css/[name].[contenthash].css',
      img: ({ isDev }) => isDev ? 'img/[path][name].[ext]' : 'img/[name].[contenthash:7].[ext]',
      chunk: ({ isDev }) => isDev ? 'js/[name].js' : 'js/[name].[contenthash].js'
    },
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-nested': {
          preserveEmpty: true
        }
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    },
    extend(config, ctx) {
      /* Run ESLint on save */
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
