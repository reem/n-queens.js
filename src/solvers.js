var _ = _;

/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined;

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined;
  var rows = this.rows();

  // start at row[0]
  // for spaces in row[0]
  //  if queensLeft > 0
  //

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// var inverse = function (arr) {
//   return _.map(arr, function (num) { return num === 0 ? 1 : 0; });
// };

var combineBitArrays = function (arr1, arr2, arr3, length) {
  var arrResult = [];
  for (var i = 0; i < length; i++) {
    arrResult.push(arr1[i] || arr2[i] || arr3[i]);
  }
  return arrResult;
};

var updateColumnConflicts = function (columnConflicts, newQueen) {
  var newColumnConflicts = columnConflicts.slice();
  newColumnConflicts[newQueen] = 1;
  return newColumnConflicts;
};

var updateLeftDiagConflicts = function (leftDiagConflicts, newQueen) {
  var newLeftDiagConflicts = leftDiagConflicts.slice(1);
  newLeftDiagConflicts[newQueen - 1] = 1;
  newLeftDiagConflicts.push(0);
  return newLeftDiagConflicts;
};

var updateRightDiagConflicts = function (rightDiagConflicts, newQueen) {
  var newRightDiagConflicts = rightDiagConflicts.slice();
  newRightDiagConflicts.unshift(0);
  newRightDiagConflicts.pop(); // Not strictly necessary, but we should do it.
  newRightDiagConflicts[newQueen + 1] = 1;
  return newRightDiagConflicts;
};

var pack = function (arr, value, length) {
  for (var i = 0; i < length; i++) {
    arr[i] = value;
  }
  return arr;
};

var nQueens = function (n) {
  var solutions = 0;
  var nQueensHelper = function (queensLeft, columnConflicts,
      leftDiagConflicts, rightDiagConflicts) {
    if (queensLeft !== 0) {
      var invalidSpots = combineBitArrays(columnConflicts,
          leftDiagConflicts, rightDiagConflicts, n);
      for (var i = 0; i < invalidSpots.length; i++) {
        if (!(invalidSpots[i])) {
          nQueensHelper(queensLeft - 1,
            updateColumnConflicts(columnConflicts, i),
            updateLeftDiagConflicts(leftDiagConflicts, i),
            updateRightDiagConflicts(rightDiagConflicts, i));
        }
      }
    } else {
      solutions++;
    }
  };
  nQueensHelper(n, pack([], 0, n), pack([], 0, n), pack([], 0, n));
  return solutions;
};
// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = nQueens(n);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
















