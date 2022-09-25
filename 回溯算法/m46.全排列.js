/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  const ans = []
  const path = []

  const backtracking = (nums) => {
    if (path.length === nums.length) {
      ans.push([...path])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue
      path.push(nums[i])
      backtracking(nums)
      path.pop()
    }
  }
  backtracking(nums, [])
  return ans
};
nums = [1,2,3]
permute(nums)
// @lc code=end

