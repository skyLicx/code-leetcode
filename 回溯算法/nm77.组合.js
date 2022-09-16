/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let ans = []
  let path = []
  const backtracking = (n, k, startIndex) => {
    if (path.length == k) {
      ans.push([...path])
      return
    }
    // n - (k - path.length) + 1 剪枝
    for(let i = startIndex; i <= n - (k - path.length) + 1; i++) {
      path.push(i)
      backtracking(n, k, i + 1)
      path.pop()
    }
  }
  backtracking(n, k, 1)
  return ans
};
n = 4, k = 4
combine(n, k)
// @lc code=end

