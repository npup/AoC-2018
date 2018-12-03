const { tests } = require("../util");

const checksum = require("./1");
tests([
  [ 12, () => checksum([
    "abcdef",
    "bababc",
    "abbcde",
    "abcccd",
    "aabcdd",
    "abcdee",
    "ababab"
    ])
  ]
]);

const comonLetters = require("./2");
tests([
  [ "fgij", () => comonLetters([
    "abcde",
    "fghij",
    "klmno",
    "pqrst",
    "fguij",
    "axcye",
    "wvxyz"
    ])
  ]
]);
