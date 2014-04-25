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

  // A special value of an appropriate number of activated bits
  // that we can use to limit the areas of other binary fields
  // to only the areas that we care about.
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
  // or even the locations of the previous queens and instead we use this
  // information to infer the conflicts for the next row.
  //
  // Once we know the conflicts in our current row we can simply recurse
  // over all of the open spots and profit.
  //
  var nQueensHelper = function(leftDiags, columns, rightDiags) {
    // We get validSpots with some bit trickery. Effectively, each
    // of the parameters can be ORed together to create
    // an integer with all the conflicts together, which we then
    // invert and limit by ANDing with allOnes, our special value from
    // earlier.
    var validSpots = ~(leftDiags|columns|rightDiags) & allOnes;

    // Since validSpots contains 1s in all of the locations that
    // are conflict-free, we know we have gone through all of
    // those locations when validSpots is all 0s, i.e. when it is
    // 0. Basically, that means we can use it as a boolean check here.
    while (validSpots) {
      // This is just bit trickery. For reasons involving the weird
      // behavior of two's complement integers, this creates an integer
      // which is all 0s except for a single 1 in the position of the
      // LSB of validSpots.
      var currentSpot = -validSpots & validSpots;

      // We then XOR that integer with the validSpots to flip it to 0
      // in validSpots.
      validSpots ^= currentSpot;

      // Make a recursive call. This is where we infer the conflicts
      // for the next row.
      nQueensHelper(
        // We add a conflict in the current spot and then shift left,
        // which has the desired effect of moving all of the conflicts
        // that are created by left diagonals to the left one square.
        (leftDiags|currentSpot) << 1,

        // For columns we simply mark this column as filled by ORing
        // in the currentSpot.
        (columns|currentSpot),

        // This is the same as the leftDiag shift, except we shift
        // right because these conflicts are caused by right
        // diagonals.
        (rightDiags|currentSpot) >> 1);
    }
    // If columns is all blocked (i.e. if it is all ones) then we
    // have arrived at a solution because we have placed n queens.
    solutions += columns === allOnes;
  };

  // Call our helper function with the appropriate args.
  // Technically undefined is represented as 0 in bits, so we could
  // call this with no arguments, but that is confusing.
  nQueensHelper(0, 0, 0);

  // Woohoo!
  return solutions;
};














