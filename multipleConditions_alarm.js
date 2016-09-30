var autoAlarm = function(tomorrow) {
  //get integer value of the current day
    var day = tomorrow.getDay();
    console.log(day);
//determines if the value is between 0 and 6
    if (day > 0 && day < 6) {
      return '5:00am';
    }
      else if (day == 0) {
      return '7:00am';
    }
    else {
      return '8:00am';
    }
  };
//Stores the current date
var date = new Date();
//Store function value in variable
var getUp = autoAlarm(date);
//Prints value
console.log(getUp);
