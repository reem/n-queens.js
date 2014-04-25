/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

var nQueens = function (n) {

  // Our solution count.
  // This will be updated inside of the recursive calls to our helper.
  // Keeping this count outside of the function instead of just
  // returning up the stack increases performance significantly
  // because the call stack can be become extremely nested.
  var solutions = 0;
  var allOnes = (1 << n) - 1;

  // The meat of the algorithm is in here, a recursive helper function
  // that actually computes the answer using a depth-first, backtracking
  // algorithm.
  //
  // The 30,000 foot overview is as follows:
  //
  // This function takes only 3 parameters: three integers which represent
  // the spots on the current row that are blocked by previous queens.
  //
  // The "secret sauce" here is that we can avoid passing around the board
  // or even the locations of the previous queens
  //
  var nQueensHelper = function(leftDiags, columns, rightDiags) {
    var validSpots = ~(leftDiags|columns|rightDiags) & allOnes;
    while (validSpots) {
      var currentSpot = -validSpots & validSpots;
      validSpots ^= currentSpot;
      nQueensHelper(
        (leftDiags|currentSpot) << 1,
        (columns|currentSpot),
        (rightDiags|currentSpot) >> 1);
    }
    solutions += columns === allOnes;
  };

  nQueensHelper((1 << n) - 1, 0, 0, 0);
  return solutions;
};














