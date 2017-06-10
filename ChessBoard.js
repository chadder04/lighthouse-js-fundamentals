
// ChessBoard exercise
// http://eloquentjavascript.net/02_program_structure.html#h_rDxYNPd65Z
// Chad Garrett Jun 10 2017

function createChessBoard(sqSize) {
  var sqString = '';
  var sqAlternate = true;

  for (var row = 1; row <= sqSize; row++) {
    for (var column = 1; column <= sqSize; column++) {
      if (sqAlternate) {
        sqString += ' ';
      } else {
        sqString += '#';
      }
      sqAlternate = !sqAlternate;
    }
    sqString += '\n';
    sqAlternate = !sqAlternate;
  }

  return sqString;
}

console.log(createChessBoard(8));