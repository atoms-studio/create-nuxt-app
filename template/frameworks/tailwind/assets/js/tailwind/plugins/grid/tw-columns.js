'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
})

module.exports = (options) => {
  return ({ e, addComponents, config }) =>
    addComponents({ '@variants responsive': defineCol(e, config) })
};

function defineCol (e, config) {
  const columns = config('theme.columns', [])
  return Object.assign(
    {},
    {
      '.col-auto': {
        maxWidth: '100%',
        width: 'auto',
        flex: '0 0 auto',
        '-ms-flex': '0 0 auto'
      }
    },
    {
      [`.${e(`col-${'1/x'}`)}`]: {
        'ms-flex-preferred-size': 0,
        'flex-basis': 0,
        '-ms-flex-positive': 1,
        'flex-grow': 1,
        maxWidth: '100%'
      }
    },
    ...Object.keys(columns).map((key, index) => {
      return {
        [`.${e(`col-${key}`)}`]: {
          maxWidth: columns[key],
          flex: '0 0 ' + columns[key],
          '-ms-flex': '0 0 ' + columns[key]
        }
      }
    })
  )
}
