const { readLines } = require("../util");
const input = readLines("./data.txt");

// 1
const checksum = require("./1");
console.log(checksum(input));

// 2
const comonLetters = require("./2");
console.log(comonLetters(input));
