const assert = require('assert');

var fromWhere = function(regNum) {
  if (regNum.startsWith('CY')) {
      return 'Bellville';
    }
    else if (regNum.startsWith('CJ')) {
      return 'Paarl';
    }
    else if (regNum.startsWith('CA')){
      return 'Cape Town';
    }
    else {
      return 'Car location uknown';
    }
  };

assert.equal(fromWhere('CY'), 'Bellville');
assert.equal(fromWhere('CJ'), 'Paarl');
assert.equal(fromWhere('CA'), 'Cape Town');

console.log(fromWhere('CY'));
console.log(fromWhere('CJ'));
console.log(fromWhere('CA'));
console.log(fromWhere('GP'));
