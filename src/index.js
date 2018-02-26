module.exports = function warmup(temperature) {
  // your implementation here
  return !isNaN(+temperature) ? temperature*9/5 + 32 : false;
};
