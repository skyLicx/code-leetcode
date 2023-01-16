/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
	const set = new Set()
	const n = nums.length
	for (let i = 0; i < n; i++) {
		set.add(nums[i])
	}
	for (let i = 0; i <= n; i++) {
		if (!set.has(i)) {
			return i
		}
	}
}
// @lc code=end
