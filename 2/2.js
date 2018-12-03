/*
The boxes will have IDs which differ by exactly one character at the same position in both strings. For example, given the following box IDs:

abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz
The IDs abcde and axcye are close, but they differ by two characters (the second and fourth). However, the IDs fghij and fguij differ by exactly one character, the third (h and u). Those must be the correct boxes.

What letters are common between the two correct box IDs? (In the example above, this is found by removing the differing character from either ID, producing fgij.)
*/

const countMismatches = (s1, s2) =>
  s1.split("").reduce((count, char, idx) => {
    return count + (s2[idx] != char ? 1 : 0);
  }, 0);

const findMismatch = (strings, count) => {
  let a, b;
  outer:
  for (let idx = 0; idx < strings.length; ++idx) {
    for (let idx2 = 0; idx2 < strings.length; ++idx2) {
      if (count == countMismatches(strings[idx], strings[idx2])) {
        [ a, b ] = [ strings[idx], strings[idx2] ];
        break outer;
      }
    }
  }
  return a.split("").reduce((remains, char, idx) =>
        char == b[idx] ? remains + char : remains,
        ""
      );
};
module.exports = strings =>
  findMismatch(strings, 1);
