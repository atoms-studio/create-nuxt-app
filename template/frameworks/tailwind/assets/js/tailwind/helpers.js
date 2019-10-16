const pxToRem = (pxSize, rootSize = 16) => {
  // Calculate rem size
  let remSize = (pxSize / rootSize).toFixed(4)

  // Set it to 1 if something went wrong
  if (isNaN(remSize)) {
    remSize = 1
  }

  return remSize
};

module.exports = { pxToRem }
