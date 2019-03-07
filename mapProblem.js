var words = ["ground", "control", "to", "major", "tom"];

var howLong = function(words) {
  return words.length;
};

var upperCase = function(words) {
  return words.toUpperCase();
};

var splitReverse = function(words) {
  return words.split('').reverse().join('');
};


var update = function(list, cb) {
  var outputArr = [];

  for (var item of list) {
    outputArr.push(cb(item));
  }

  return outputArr;
};

console.log(update(words, howLong))
console.log(update(words, upperCase))
console.log(update(words, splitReverse))


/* [6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]

*/



