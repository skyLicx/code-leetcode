/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  let ans = []
  let path = []
  let sum = 0
  const backtracking = (k, n, startIndex) => {
    if (sum === n && path.length === k) {
      ans.push([...path])
      return
    }
    for (let i = startIndex; i < numArr.length; i++) {
      if (sum > n - numArr[i] || path.length > k) return
      path.push(numArr[i])
      sum += numArr[i]
      backtracking(k, n, i + 1)
      path.pop()
      sum -= numArr[i]
    }
  }
  backtracking(k, n, 0)
  return ans
};
// @lc code=end

