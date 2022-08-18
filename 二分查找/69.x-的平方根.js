/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let left = 0
  let right = x
  let ans = -1
  while(left <= right) {
    const mid = Math.floor(left + (right - left) / 2)
    if (mid * mid <= x) {
      left = mid + 1
      ans = mid
    } else {
      right = mid - 1
    }
  }
  return ans
}
console.log(mySqrt(5))
// @lc code=end

