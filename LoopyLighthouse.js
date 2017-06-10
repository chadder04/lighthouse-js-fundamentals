// Loopy Lighthouse exercise
// Chad Garrett June 10 2017

function LoopyLighthouse() {
  var start = 100;
  var end = 200;

  for (var i = start; i <= end; i++) {
    var isMultipleOfFour = i % 4 === 0;
    var isMultipleOfThree = i % 3 === 0;

    if (isMultipleOfThree && isMultipleOfFour) {
      console.log('LoopyLighthouse');
      continue;
    }

    if (isMultipleOfThree) {
      console.log('Loopy');
      continue;
    }

    if (isMultipleOfFour) {
      console.log('Lighthouse');
      continue;
    }

    console.log(i);
  }

}

LoopyLighthouse();