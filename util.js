const assert = require("assert");
const fs = require("fs");

const readInput = path =>
  fs.readFileSync(path, "utf-8");

const readLines = path =>
  readInput(path).split(/\n/);

const toNumbers = arr =>
  arr.map(Number);

const test = (expected, fn) =>
  assert.equal(expected, fn());

const tests = tests => {
  const result = tests.reduce((coll, [expected, fn]) => {
    coll.total += 1;
    try {
      test(expected, fn);
      coll.ok += 1;
    }
    catch(err) {
      coll.errors += 1;
      console.error(err);
    }
    return coll;
  }, { total: 0, errors: 0, ok: 0 });
  if (0 == result.errors) {
    console.log(`${ result.total } test/s, all OK`);
  }
  else {
    console.log(`${ result.errors } error/s, ${ result.ok } OK`);
  }
};

module.exports = {

  tests,

  readInput,
  readLines,

  toNumbers

};
