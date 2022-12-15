/*
 * @lc app=leetcode.cn id=1668 lang=javascript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function (sequence, word) {
  let temp = word
  let k = 0
	while(sequence.indexOf(word) > -1) {
    k++
    word += temp
  }
  return k
}

// @lc code=end
