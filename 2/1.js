/*
To make sure you didn't miss any, you scan the likely candidate boxes again, counting the number that have an ID containing exactly two of any letter and then separately counting those with exactly three of any letter. You can multiply those two counts together to get a rudimentary checksum and compare it to what your device predicts.

For example, if you see the following box IDs:

abcdef contains no letters that appear exactly two or three times.
bababc contains two a and three b, so it counts for both.
abbcde contains two b, but no letter appears exactly three times.
abcccd contains three c, but no letter appears exactly two times.
aabcdd contains two a and two d, but it only counts once.
abcdee contains two e.
ababab contains three a and three b, but it only counts once.
Of these box IDs, four of them contain a letter which appears exactly twice, and three of them contain a letter which appears exactly three times. Multiplying these together produces a checksum of 4 * 3 = 12.

What is the checksum for your list of box IDs?
*/

const countLetters = str => str.split("").reduce((coll, letter) => {
      let count = coll[letter] || 0;
      coll[letter] = count + 1;
      return coll;
    }, {});

const hits = [ 2, 3 ];
const getUniques = row =>
  Object.values(row).reduce((coll, score) => {
      if (null == coll.map[score]) {
        coll.map[score] = true;
        coll.scores.push(score);
      }
      return coll;
    }, { scores: [], map: {} }).scores.filter(score => hits.indexOf(score) > -1);

const getScores = rows => {
  const scoresPerRow = rows.reduce((coll, row) =>
    coll.concat(getUniques(row)),
    []
  );
  return Object.values(
    scoresPerRow.reduce((coll, rowScore) => {
      coll[rowScore] = (coll[rowScore] || 0) + 1;
      return coll;
    }, {})
  );
};

module.exports = strings => {
  const rows = strings.map(countLetters),
  scores = getScores(rows);
  return scores.reduce((product, score) => product * score, 1);
};

