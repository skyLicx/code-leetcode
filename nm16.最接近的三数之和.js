/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * 暴力解法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result = Infinity
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for(let m = j + 1; m < nums.length; m++) {
        if (Math.abs(result - target) > Math.abs(nums[i] + nums[j] + nums[m] - target)) {
          result = nums[i] + nums[j] + nums[m]
        }
      }
    }
  }
  return result
};

// @lc code=end
