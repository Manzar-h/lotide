const middle = function(array) {
  let arr = [];
  
  if (array.length <= 2) {
    return arr;
  } else if (array.length % 2 === 0) {
    arr = array.slice(array.length / 2 - 1, array.length / 2 + 1);
  } else {
    arr =  [array[Math.floor(array.length / 2)]];
  }
  return arr;
};

module.exports = middle;

