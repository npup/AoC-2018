const { readLines } = require("../util");
const input = readLines("./data.txt");

// 1
const overlaps = require("./1");
console.log(overlaps(input));

// 2
const notOverlapped = require("./2");
console.log(notOverlapped(input));
