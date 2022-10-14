/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = -Infinity
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum > max) {
      max = sum
    }
    // sum如果为负数 加上一个数num必定小于num 所以重置为0 让下个sum等于num
    if (sum < 0) {
      sum = 0
    }
  }
  return max
};
// @lc code=end

