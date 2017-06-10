// http://eloquentjavascript.net/02_program_structure.html#h_rDxYNPd65Z

// Looping A Triangle exercise
for (var i = 1; i <= 7; i++) {
  var str = '';
  for (var j = 1; j <= i; j++) {
    str += '#';
  }
  console.log(str);
}