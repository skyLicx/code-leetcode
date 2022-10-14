/*
 * @lc app=leetcode.cn id=376 lang=javascript
 *
 * [376] 摆动序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
	if (nums.length <= 1) return nums.length
	let sum = 1
	let pre = 0
	let cur = 0
	for (let i = 0; i < nums.length - 1; i++) {
		cur = nums[i + 1] - nums[i]
		if ((cur > 0 && pre <= 0) || (cur < 0 && pre >= 0)) {
			sum++
			pre = cur
		}
	}
	return sum
}
// @lc code=end
