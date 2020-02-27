<%_ if (esm) { _%>
  <%_ if (ui === 'vuetify') { _%>
import colors from 'vuetify/es5/util/colors'
  <%_ } _%>
  <%_ if (i18n) { _%>
  import i18n from './lang/config'
  <%_ } _%>
<%_ } else { _%>
  <%_ if (server === 'adonis') { _%>
const { resolve } = require('path')
  <%_ } _%>
  <%_ if (ui === 'vuetify') { _%>
const colors = require('vuetify/es5/util/colors').default
  <%_ } _%>
  <%_ if (i18n) { _%>
const i18n = require('./lang/config')
  <%_ } _%>
<%_ } _%>

<%_ if (dotenv) { _%>
  require('dotenv').config()
<%_ } _%>

<%_ if (esm) { _%>
export default {
<%_ } else { _%>
module.exports = {
<%_ } _%>
  mode: '<%= mode %>',
  <%_ if (server === 'adonis') { _%>
  dev: process.env.NODE_ENV === 'development',
  srcDir: resolve(__dirname, '..', 'resources'),
  <%_ } _%>
  <%_ if (hlcms === 'datocms') { _%>
    env: {
      DATOCMS_API_TOKEN: process.env.DATOCMS_API_TOKEN
    },
  <%_ } _%>
  <%_ if (hlcms === 'contentful') { _%>
    env: {
      CTF_SPACE_ID: process.env.CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN
    },
  <%_ } _%>
  /*
  ** Headers of the page
  */
  head: {
    <%_ if (ui === 'vuetify') { _%>
    titleTemplate: '%s - ' + process.env.npm_package_name,
    <%_ } _%>
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      <%_ if (ui === 'framevuerk') { _%>
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      },
      <%_ } _%>
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    <%_ if (ui === 'element-ui') { _%>
    'element-ui/lib/theme-chalk/index.css'
    <%_ } else if (ui === 'iview') { _%>
    'iview/dist/styles/iview.css'
    <%_ } else if (ui === 'ant-design-vue') { _%>
    'ant-design-vue/dist/antd.css'
    <%_ } else if (ui === 'tachyons') { _%>
    'tachyons/css/tachyons.css'
    <%_ } else if (ui === 'framevuerk') { _%>
    'framevuerk/dist/framevuerk-nuxt.min.css'
    <%_ } else if (ui === 'none') { _%>
    '~/assets/scss/app.scss'
    <%_ } else if (ui === 'vuesax') { _%>
    'vuesax/dist/vuesax.css'
    <%_ } _%>
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    <%_ if (ui === 'element-ui') { _%>
    '@/plugins/element-ui'
    <%_ } else if (ui === 'iview') { _%>
    '@/plugins/iview'
    <%_ } else if (ui === 'ant-design-vue') { _%>
    '@/plugins/antd-ui'
    <%_ } else if (ui === 'framevuerk') { _%>
    '@/plugins/framevuerk'
    <%_ } else if (ui === 'vuesax') { _%>
    '@/plugins/vuesax'
    <%_ } _%>
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    <%_ if (eslint) { _%>
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    <%_ } _%>
    <%_ if (stylelint) { _%>
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    <%_ } _%>
    <%_ if (ui === 'tailwind') { _%>
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    <%_ } else if (ui === 'vuetify') { _%>
    '@nuxtjs/vuetify',
    <%_ } _%>
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    <%_ if (ui === 'bootstrap') { _%>
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    <%_ } else if (ui === 'bulma') { _%>
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    <%_ } else if (ui === 'buefy') { _%>
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    <%_ } _%>
    <%_ if (axios) { _%>
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    <%_ } _%>
    <%_ if (pwa) { _%>
    '@nuxtjs/pwa',
    <%_ } _%>
    <%_ if (dotenv) { _%>
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    <%_ } _%>
    <%_ if (i18n) { _%>
    // Doc: https://nuxt-community.github.io/nuxt-i18n/
    'nuxt-i18n',
    <%_ } _%>
  ],
  <%_ if (axios) { _%>
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  <%_ } _%>
  <%_ if (i18n) { _%>
    /*
    ** Nuxt i18n module configuration
    ** See https://nuxt-community.github.io/nuxt-i18n/options-reference.html
    */
   i18n,
  <%_ } _%>
  <%_ if (ui === 'vuetify') { _%>
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  <%_ } else if (ui == 'tailwind') { _%>
  /*
  ** Tailwind CSS module configuration
  ** https://github.com/nuxt-community/nuxt-tailwindcss
  */
  tailwindcss: {
    cssPath: '~/assets/scss/app.scss',
  },
  <%_ } _%>
  /*
  ** Build configuration
  */
  build: {
    <%_ if (ui === 'bulma') { _%>
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    <%_ } else if (ui === 'element-ui') { _%>
    transpile: [/^element-ui/],
    <%_ } _%>
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      <%_ if (hlcms === 'datocms') { _%>
        config.module.rules.push({
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        })
      <%_ } _%>  
    }
  }
}
