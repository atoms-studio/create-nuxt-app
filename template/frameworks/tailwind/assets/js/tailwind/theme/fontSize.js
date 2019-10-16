const { pxToRem } = require('../helpers')

/**
 * https://tailwindcss.com/docs/font-size#font-sizes
 */
const fontSize = {
  xs: `${pxToRem(12)}rem`,
  sm: `${pxToRem(14)}rem`,
  tiny: `${pxToRem(14)}rem`,
  base: `${pxToRem(16)}rem`,
  lg: `${pxToRem(18)}rem`,
  xl: `${pxToRem(20)}rem`,
  '2xl': `${pxToRem(24)}rem`,
  '3xl': `${pxToRem(30)}rem`,
  '4xl': `${pxToRem(36)}rem`,
  '5xl': `${pxToRem(48)}rem`,
  '6xl': `${pxToRem(64)}rem`,
  '7xl': `${pxToRem(80)}rem`
}

module.exports = fontSize
