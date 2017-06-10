// Merge Arrays exercise
// Chad Garrett June 10 2017 @ 5:04pm

function merge(arr1, arr2) {
  var newArray = [];

  newArray = newArray.concat(arr1, arr2);
  newArray = newArray.sort();

  return newArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);