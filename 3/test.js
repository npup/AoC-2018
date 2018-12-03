const { tests } = require("../util");

const claims = ["#1 @ 1,3: 4x4", "#2 @ 3,1: 4x4", "#3 @ 5,5: 2x2"];

const f = require("./1");
tests([
    [ 4, () => f(claims) ]
]);

const f2 = require("./2");
tests([
    [ 3, () => f2(claims) ]
]);
