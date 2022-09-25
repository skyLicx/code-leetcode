/*
 * @lc app=leetcode.cn id=491 lang=javascript
 *
 * [491] 递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function(nums) {
  const ans = []
  const path = []

  const backtracking = (nums, startIndex) => {
    if (path.length >= 2) {
      ans.push([...path])
    }
    // 这一层中相同的数据无法再用
    let uset = []
    for (let i = startIndex; i < nums.length; i++) {
      if (path.length && nums[i] < path[path.length - 1] || uset[nums[i] + 100]) {
        continue
      }
      uset[nums[i] + 100] = true
      path.push(nums[i])
      backtracking(nums, i + 1)
      path.pop()
    }
  }
  backtracking(nums, 0)
  return ans
};
// @lc code=end

