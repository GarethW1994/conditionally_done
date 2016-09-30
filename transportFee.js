const assert = require('assert');

var transportFee = function(shift) {
  if (shift.includes('morning')) {
    return 'R10';
  }
  else if (shift.includes('afternoon')) {
    return 'R20';
  }
  else if (shift.includes('night')) {
    return 'transport cost is nothing!';
  }
  else {
    return 'Please make sure you are specifying correct shift'
  }
};

assert.equal(transportFee('morning'), 'R10');
assert.equal(transportFee('afternoon'), 'R20');
assert.equal(transportFee('night'), 'transport cost is nothing!');

console.log(transportFee('morning'));
console.log(transportFee('afternoon'));
console.log(transportFee('night'));
