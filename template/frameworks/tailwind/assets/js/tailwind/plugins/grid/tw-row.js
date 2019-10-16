'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
})

module.exports = (options) => {
  return ({ e, addComponents, config }) => addComponents(defineRow(e, config))
};

function defineRow (e, config) {
  const gutters = config('theme.gutters', [])
  const screens = config('theme.screens', [])
  return Object.assign(
    {},
    {
      '.row': {
        display: 'flex',
        '-ms-flex-wrap': 'wrap',
        'flex-wrap': 'wrap',
        'margin-right': -(gutters[0].gutters / 2) + 'px',
        'margin-left': -(gutters[0].gutters / 2) + 'px'
      }
    },
    ...Object.keys(screens).map((key, index) => {
      return {
        [`@media (min-width: ${screens[key]})`]: {
          '.row': {
            'margin-right': -(gutters[key].gutters / 2) + 'px',
            'margin-left': -(gutters[key].gutters / 2) + 'px'
          }
        }
      }
    })
  )
}
