'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
})

module.exports = (options) => {
  return ({ e, addComponents, config }) =>
    addComponents(defineGutters(e, config))
};

function defineGutters (e, config) {
  const gutters = config('theme.gutters', [])
  const screens = config('theme.screens', [])
  return Object.assign(
    {},
    {
      '._col': {
        position: 'relative',
        width: '100%',
        'padding-left': gutters[0].gutters / 2 + 'px',
        'padding-right': gutters[0].gutters / 2 + 'px'
      },
      '.-col': {
        position: 'relative',
        width: '100%'
      }
    },
    ...Object.keys(screens).map((key, index) => {
      return {
        [`@media (min-width: ${screens[key]})`]: {
          '._col': {
            'padding-left': gutters[key].gutters / 2 + 'px',
            'padding-right': gutters[key].gutters / 2 + 'px'
          }
        }
      }
    })
  )
}
