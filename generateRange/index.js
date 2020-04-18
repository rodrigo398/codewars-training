const generateRange = (min, max, step) => {
  const final = [];

  for (let i = min; i <= max; i += step) {
    final.push(i);
  }

  return final;
};

module.exports = generateRange;
