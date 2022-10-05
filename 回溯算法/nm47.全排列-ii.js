/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	nums.sort((a, b) => {
		return a - b
	})

	const ans = []
	const path = []

	const backtracking = (used) => {
		if (path.length === nums.length) {
			ans.push([...path])
			return
		}

		for (let i = 0; i < nums.length; i++) {
			if (i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) {
				continue
			}
      if (!used[i]) {
        used[i] = true
        path.push(nums[i])
        backtracking(used)
        path.pop()
        used[i] = false
      }
		}
	}
	backtracking([])
	console.log(ans)
	return ans
}
nums = [1, 1, 2]
permuteUnique(nums)
// @lc code=end
