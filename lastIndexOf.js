// lastIndexOf
// Chad Garrett June 10 2017

function lastIndexOf(haystack, needle) {
  var sizeOfHaystack = haystack.length;

  for (var i = (sizeOfHaystack - 1); i >= 0; i--) {
    if (haystack[i] == needle) {
      return i;
    }
  }

  return -1;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);