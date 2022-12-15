/*
 * @lc app=leetcode.cn id=1805 lang=javascript
 *
 * [1805] 字符串中不同整数的数目
 */

// @lc code=start
/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
  const set = new Set()
  const n = word.length
  let p1 = 0
  let p2 = 0
  while(true) {
    while(p1 < n && !isDigit(word[p1])) {
      p1++
    }
    if (p1 == n) {
      break
    }
    p2 = p1
    while(p2 < n && isDigit(word[p2])) {
      p2++
    }
    while(p2 - p1 > 1 && word[p1] === '0') {
      p1++
    }
    set.add(word.slice(p1, p2))
    p1 = p2
  }
  return set.size
};

const isDigit = (ch) => {
  return '0' <= ch && ch <= '9';
}

// @lc code=end