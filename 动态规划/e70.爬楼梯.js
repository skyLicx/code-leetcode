/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  let pre1 = 1
  let pre2 = 2
  if (n === 1) return pre1
  if (n === 2) return pre2
  for (let i = 2; i < n; i++) {
    const temp = pre1 + pre2
    pre1 = pre2
    pre2 = temp
  }
  return pre2
};
// @lc code=end

