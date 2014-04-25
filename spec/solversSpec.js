describe('solvers', function() {
  describe('nQueens', function() {

    it('finds the number of valid solutions for n of 0-8', function() {
      _.range(0, 9).map(function(n) {
        var solutionCount = nQueens(n);
        var expectedSolutionCount = [1, 1, 0, 0, 2, 10, 4, 40, 92][n];

        expect(solutionCount).to.equal(expectedSolutionCount);
      });
    });

    it('finds the number of valid solutions for 12 queens', function() {
      expect(nQueens(12)).to.equal(14200);
    });
  });
});
