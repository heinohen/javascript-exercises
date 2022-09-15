const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const sum = function(intArray) { return intArray.reduce((a,b) => a + b, 0);}

const multiply = function(intArray) {

  var sum = parseInt(intArray[0]);

  for (var i = 1; i < intArray.length; i++) {
    sum *= parseInt(intArray[i]);
  }

  return sum;
}



const power = (a,b) => Math.pow(a,b);
	

const factorial = function(a) {
  if (a <= 1) {
    return 1;
  }

  else {
    return a * factorial(a-1);
  }
	
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
