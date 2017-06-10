// Looping - Range function
// Chad Garrett June 10 2017

function range(start, end, step) {
  var numArray = [];
  var numIndex = start;

  // return empty array if start, end, or step is undefined
  if (start === undefined || end === undefined || step === undefined) {
    return numArray;
  }

  // return empty array if start is greater than end or step is negative
  if (start > end || step < 0) {
    return numArray;
  }

  while (numIndex <= end) {
    numArray.push(numIndex);
    numIndex = numIndex + step;
  }

  return numArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));