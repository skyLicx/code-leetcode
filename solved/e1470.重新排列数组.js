/*
 * @lc app=leetcode.cn id=1470 lang=javascript
 *
 * [1470] 重新排列数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
  let p1 = 0
  let p2 = n
  let ans = []
  while(p2 < nums.length) {
    ans.push(nums[p1])
    ans.push(nums[p2])
    p1++
    p2++
  }
  return ans
};
// @lc code=end

