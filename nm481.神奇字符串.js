/*
 * @lc app=leetcode.cn id=481 lang=javascript
 *
 * [481] 神奇字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
	let str = '122'
  let count = 1
  if (n <= 3) return count
  let addDigit = 1
	for (let i = 2; i < n; i++) {
    let index = str[i] - 0
    while (index) {
      if (str.length === n) return count
      str += addDigit
      if (addDigit === 1) {
        count++
      }
      index--
    }
    addDigit = addDigit === 1 ? 2 : 1
	}
}

// @lc code=end
