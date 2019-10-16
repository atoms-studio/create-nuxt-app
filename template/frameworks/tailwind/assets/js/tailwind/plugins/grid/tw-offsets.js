'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
})

module.exports = (options) => {
  return ({ e, addComponents, config }) =>
    addComponents({ '@variants responsive': defineOffset(e, config) })
};

function defineOffset (e, config) {
  const columns = config('theme.columns', [])
  return Object.assign(
    {},
    ...Object.keys(columns).map((key, index) => {
      return {
        [`.${e(`offset-${key}`)}`]: {
          marginLeft: columns[key]
        }
      }
    })
  )
}
