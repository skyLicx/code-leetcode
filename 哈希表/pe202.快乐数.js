/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let sum = getSum(n)
  let set = new Set()
  while(1) {
    if (sum == 1) {
      return true
    }
    if (set.has(sum)) {
      return false
    } else {
      set.add(sum)
      sum = getSum(sum)
    }
  }
};

var getSum = (n) => {
  let sum = 0
  while(n) {
    sum += (n % 10) * (n % 10)
    n = parseInt(n / 10)
  }
  return sum
}
// @lc code=end

