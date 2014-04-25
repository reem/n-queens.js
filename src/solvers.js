var _ = _;

/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

var nQueens = function (n) {
  var solutions = 0;

  var nQueensHelper = function(magicQ, leftDiags, columns, rightDiags) {
    var validSpots = ~(leftDiags|columns|rightDiags) & magicQ;
    while(validSpots) {
      var spot = -validSpots & validSpots;
      validSpots ^= spot;
      nQueensHelper(
        magicQ,
        (leftDiags|spot) << 1,
        (columns|spot),
        (rightDiags|spot) >> 1);
    }
    solutions += columns === magicQ;
  };

  nQueensHelper((1 << n) - 1, 0, 0, 0);
  return solutions;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = nQueens(n);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
















