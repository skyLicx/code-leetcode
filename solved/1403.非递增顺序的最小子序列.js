/*
 * @lc app=leetcode.cn id=1403 lang=javascript
 *
 * [1403] 非递增顺序的最小子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
  nums.sort((a, b) => b - a)
  let sum = 0
  for(let i = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  let ans = []
  let addSum = 0
  for(let i = 0; i < nums.length; i++) {
    addSum += nums[i]
    ans.push(nums[i])
    if(addSum > sum - addSum) {
      return ans
    }
  }
};
// @lc code=end

