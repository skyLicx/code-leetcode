/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	let ans = []
	let path = []
	let sum = 0
	candidates.sort((a, b) => a - b)
	const backtracking = (candidates, target, startIndex) => {
		if (sum === target) {
			ans.push([...path])
			return
		}
		for (let i = startIndex; i < candidates.length; i++) {
      const num = candidates[i]
      if (i > startIndex && num === candidates[i - 1]) continue
      if (sum > target - num) return
      path.push(num)
      sum += num
      backtracking(candidates, target, i + 1)
      path.pop()
      sum -= num
    }
	}
  backtracking(candidates, target, 0)
  return ans
}
candidates = [10,1,2,7,6,1,5], target = 8
console.log(combinationSum2(candidates, target))
// @lc code=end
