const assert = require('assert');
//Function
var weekOrWeekend = function(day) {
  //if-statement
  if (day.startsWith('S') && day.endsWith('day')) {
    return 'weekend';
  }

  else if (day.endsWith('day')) {
    return 'week';
  }

  else {
    return 'That is not a day';
  }
};

assert.equal(weekOrWeekend('Wednesday'), 'week');
assert.equal(weekOrWeekend('Sunday'), 'weekend');

console.log(weekOrWeekend('Monday'));
console.log(weekOrWeekend('Saturday'));
