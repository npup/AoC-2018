const { tests } = require("../util");

const resultingFrequency = require("./1");
tests([
  [ 3, () => resultingFrequency([ 1, -2, 3, 1 ]) ],
  [ 3, () => resultingFrequency([ 1, 1, 1 ]) ],
  [ 0, () => resultingFrequency([ 1, 1, -2 ]) ],
  [ -6, () => resultingFrequency([ -1, -2, -3 ]) ]
]);


const firstReachedTwice = require("./2");
tests([
  [ 0, () => firstReachedTwice([ 1, -1 ]) ],
  [ 10, () => firstReachedTwice([ +3, +3, +4, -2, -4 ]) ],
  [ 5, () => firstReachedTwice([ -6, +3, +8, +5, -6 ]) ],
  [ 14, () => firstReachedTwice([ +7, +7, -2, -7, -4 ]) ]
]);
