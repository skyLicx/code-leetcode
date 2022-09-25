/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort((a, b) => a - b)
  const ans = []
  const path = []
  const backtracking = (nums, startIndex) => {
    ans.push([...path])
    for (let i = startIndex; i < nums.length; i++) {
      if (i > startIndex && nums[i] === nums[i - 1]) continue
      path.push(nums[i])
      backtracking(nums, i + 1)
      path.pop()
    }
  }
  backtracking(nums, 0)
  return ans
};
nums = [1,2,2]
subsetsWithDup(nums)
// @lc code=end

