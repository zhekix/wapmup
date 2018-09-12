module.exports = function warmup(temperature) {
  return !isNaN(+temperature) ? temperature*9/5 + 32 : false;
};
