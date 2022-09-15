/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  let ans = []
  let path = []
  let sum = 0
  const backtracking = (candidates, target, startIndex) => {
    if (sum > target) {
      return
    }
    if (sum === target) {
      ans.push([...path])
      return
    }
    for (let i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i])
      sum += candidates[i]
      backtracking(candidates, target, i)
      path.pop()
      sum -= candidates[i]
    }
  }
  backtracking(candidates, target, 0)
  return ans
};
candidates = [2], target = 1
combinationSum(candidates, target)
// @lc code=end

