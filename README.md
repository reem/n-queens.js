#Javascript N-Queens

The 30,000 foot overview of this algorithm is as follows:

Our inner helper function that does all of the work only takes a
few arguments: three integers which represent the spots on the
current row that are blocked by previous queens.

The "secret sauce" here is that we can avoid passing around the board
or even the locations of the previous queens and instead we use this
information to infer the conflicts for the next row.

Once we know the conflicts in our current row we can simply recurse
over all of the open spots and profit.

We can then use bit magic to significantly speed up the process over
arrays - almost a 50x speedup.

Time for n=12: 60ms.

This was part of the curriculum at Hack Reactor and worked on with a pair.
