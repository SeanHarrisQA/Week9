const checkPrime = (a) => {
  if (a === 1) return false;
  for (let i = 2; i < a / 2; i += 1) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

module.exports = {
  checkPrime,
};
