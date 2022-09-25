/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const ans = []
  const path = []
  const backtracking = (nums, startIndex) => {
    ans.push([...path])
    for (let i = startIndex; i < nums.length; i++) {
      if (startIndex >= nums.length) break
      path.push(nums[i])
      backtracking(nums, i + 1)
      path.pop()
    }
  }
  backtracking(nums, 0)
  return ans
};
nums = [0]
subsets(nums)
// @lc code=end

