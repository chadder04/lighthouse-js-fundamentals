// Loopy Lighthouse 2 exercise
// Chad Garrett June 10 2017

function loopyLighthouse(range, multiples, words) {
  var start = range[0];
  var end = range[1];

  for (var i = start; i <= end; i++) {
    var isMultipleOfTwo = i % 2 === 0;
    var isMultipleOfFive = i % 5 === 0;

    if (isMultipleOfTwo && isMultipleOfFive) {
      console.log(words[0] + words[1]);
      continue;
    }

    if (isMultipleOfTwo) {
      console.log(words[0]);
      continue;
    }

    if (isMultipleOfFive) {
      console.log(words[1]);
      continue;
    }

    console.log(i);
  }

}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);