const highAndLow = n => {
  const orderedNum = n.split(' ').map(str => Number(str));

  return `${Math.max(...orderedNum)} ${Math.min(...orderedNum)}`;
};

module.exports = highAndLow;
