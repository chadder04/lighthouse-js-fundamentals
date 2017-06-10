
// FizzBuzz exercise
// http://eloquentjavascript.net/02_program_structure.html#h_rDxYNPd65Z

for (var i = 1; i <= 100; i++) {
  var num = i;
  var isDivideByFive = num % 5 === 0;
  var isDivideByThree = num % 3 === 0;

  if (isDivideByThree && isDivideByFive) {
    console.log('FizzBuzz\t(3: ' + isDivideByThree.toString() + '\t5: ' + isDivideByFive.toString() + ')');
    continue;
  }

  if (isDivideByFive && !isDivideByThree) {
    console.log('Buzz\t\t(3: ' + isDivideByThree.toString() + '\t5: ' + isDivideByFive.toString() + ')');
    continue;
  }

  if (isDivideByThree) {
    console.log('Fizz\t\t(3: ' + isDivideByThree.toString() + '\t5: ' + isDivideByFive.toString() + ')');
    continue;
  }

  console.log(num + '\t\t(3: ' + isDivideByThree.toString() + '\t5: ' + isDivideByFive.toString() + ')');

}