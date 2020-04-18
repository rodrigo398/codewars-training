const shortestWord = string =>
  Math.min(...string.split(' ').map(word => word.length));

module.exports = shortestWord;
