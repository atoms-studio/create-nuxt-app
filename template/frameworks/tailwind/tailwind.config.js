/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

const gutters = require('./assets/js/tailwind/theme/gutters')
const screens = require('./assets/js/tailwind/theme/screens')
const spacing = require('./assets/js/tailwind/theme/spacing')
const columns = require('./assets/js/tailwind/theme/columns')
const fontSize = require('./assets/js/tailwind/theme/fontSize')
const colors = require('./assets/js/tailwind/theme/colors')

module.exports = {
  theme: {
    screens,
    gutters,
    spacing,
    columns,
    fontSize,
    colors
  },

  variants: {},

  plugins: [
    require('./assets/js/tailwind/plugins/grid/tw-container')(),
    require('./assets/js/tailwind/plugins/grid/tw-row')(),
    require('./assets/js/tailwind/plugins/grid/tw-gutters')(),
    require('./assets/js/tailwind/plugins/grid/tw-columns')(),
    require('./assets/js/tailwind/plugins/grid/tw-offsets')()
  ],

  purgeCSS: {
    whitelist: []
  }
}
