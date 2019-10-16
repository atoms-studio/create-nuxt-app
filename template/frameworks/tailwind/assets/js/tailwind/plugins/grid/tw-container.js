'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
})

module.exports = (options) => {
  return ({ e, addComponents, config }) =>
    addComponents(defineContainer(e, config))
};

function defineContainer (e, config) {
  const gutters = config('theme.gutters', [])
  const screens = config('theme.screens', [])
  return Object.assign(
    {},
    {
      '.container': {
        'max-width': '100%',
        'padding-left': gutters[0].margins + 'px',
        'padding-right': gutters[0].margins + 'px',
        margin: 'auto'
      },

      '.container-fluid': {
        // 'max-width': '1440px',
        width: '100%',
        'padding-left': gutters[0].margins + 'px',
        'padding-right': gutters[0].margins + 'px',
        margin: 'auto'
      }
    },
    ...Object.keys(screens).map((key, index) => {
      return {
        [`@media (min-width: ${screens[key]})`]: {
          '.container': {
            'max-width': screens[key],
            'padding-left': gutters[key].margins + 'px',
            'padding-right': gutters[key].margins + 'px'
          },

          '.container-fluid': {
            'padding-left': gutters[key].margins + 'px',
            'padding-right': gutters[key].margins + 'px'
          }
        }
      }
    })
  )
}
