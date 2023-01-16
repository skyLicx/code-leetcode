/*
 * @lc app=leetcode.cn id=1785 lang=javascript
 *
 * [1785] 构成特定和需要添加的最少元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function (nums, limit, goal) {
	let sum = nums.reduce((prev, cur) => {
		return prev + cur
	})
	const sub = Math.abs(goal - sum)
	return Math.ceil(sub / limit)
}

// @lc code=end
