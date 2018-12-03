/*
Amidst the chaos, you notice that exactly one claim doesn't overlap by even a single square inch of fabric with any other claim. If you can somehow draw attention to it, maybe the Elves will be able to make Santa's suit after all!

For example, in the claims above, only claim 3 is intact after all claims are made.

What is the ID of the only claim that doesn't overlap?
*/

const { buildGrid, computeOverlaps } = require("./lib");

const findNonOvelappedClaim = (claims, overlaps) => claims.claims.find(claim => {
    return claim.coords.reduce((x, coord) => {
      const key = `${ coord.x },${ coord.y }`,
        occupants = overlaps.coords[key];
      if (occupants > 1) { return false; }
      return x;
    }, true);
  });

module.exports = claimData => {
  const grid = buildGrid(claimData),
    overlaps = computeOverlaps(grid.coords),
    { claim } = findNonOvelappedClaim(grid, overlaps);
  return claim.id;
};
