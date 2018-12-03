const expr = /^#(\d+)\s+@\s+(\d+),(\d+):\s+(\d+)x(\d+)$/;

const getCoords = claim => {
  const result = [],
    right = claim.x + claim.width,
    bottom = claim.y + claim.height;
  for (let { x } = claim; x < right; ++x) {
    for (let { y } = claim; y < bottom; ++y) {
      result.push({ x, y });
    }
  }
  return result;
};

const buildGrid = claims =>
  claims.reduce((coll, claimStr) => {
    const [_, id, x, y, width, height ] = expr.exec(claimStr).map(Number),
      claim = { id, x, y, width, height },
      coords = getCoords(claim);
    coll.coords = coll.coords.concat(coords);
    coll.claims.push({ claim, coords });
    return coll;
  }, { coords: [], claims: [] });


const computeOverlaps = claims =>
  claims.reduce((coll, claim) => {
    const key = `${ claim.x },${ claim.y }`,
      count = (coll.coords[key] || 0) + 1;
    coll.coords[key] = count;
    // bump count on first time overlap
    if (2 == count) { coll.count += 1; }
    return coll;
  }, { coords: {}, count: 0 });


module.exports = {
  buildGrid,
  computeOverlaps
};
