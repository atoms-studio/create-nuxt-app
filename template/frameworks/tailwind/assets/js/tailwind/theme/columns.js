/**
 * https://tailwindcss.com/components/grids/
 */
const columns = { '0': '0', full: '100%' }
for (let c = 1; c <= 12; c++) {
  for (let i = 1; i <= 12; i++) {
    if (c <= i) {columns[`${c}/${i}`] = `${((c * 100) / i).toFixed(4)}%`;}
  }
}

module.exports = columns
