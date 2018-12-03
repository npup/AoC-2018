const { readLines, toNumbers } = require("../util");
const input = toNumbers(readLines("./data.txt"));

// 1
const resultingFrequency = require("./1");
console.log(resultingFrequency(input));

// 2
const firstFrequencyReachedTwice = require("./2");
console.log(firstFrequencyReachedTwice(input));
