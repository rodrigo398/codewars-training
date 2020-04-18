const isIsogram = string => {
  const newStr = string
    .split('')
    .map(char => char.toLowerCase())
    .join('');

  const newSet = new Set(newStr);

  return newSet.size === newStr.length;
};

module.exports = isIsogram;
