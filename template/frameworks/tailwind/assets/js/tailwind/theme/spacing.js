const { pxToRem } = require('../helpers')

/**
 * https://tailwindcss.com/docs/customizing-spacing
 */
const spacing = { px: '1px' }
let index = 0
for (let i = 0; i <= 400; i++) {
  if (i % 5 === 0) {spacing[index++] = `${pxToRem(i)}rem`;}
}

module.exports = spacing
