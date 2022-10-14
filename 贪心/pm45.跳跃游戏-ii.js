/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var jump = function (nums) {
// 	if (nums.length <= 1) return 0
// 	let index = 0
//   let count = 1
// 	for (let i = 0; i < nums.length - 1; i++) {
// 		const len = i + nums[i]
// 		if (len >= nums.length - 1) return count
// 		let max = len
// 		for (let j = i + 1; j <= i + nums[i]; j++) {
// 			if (j + nums[j] >= max) {
// 				max = j + nums[j]
// 				index = j
// 			}
// 		}
// 		i = index - 1
//     count++
// 	}
// }
var jump = function (nums) {
	let curIndex = 0
	let nextIndex = 0
	let steps = 0
	for (let i = 0; i < nums.length - 1; i++) {
		nextIndex = Math.max(nums[i] + i, nextIndex)
		if (i === curIndex) {
			curIndex = nextIndex
			steps++
		}
	}

	return steps
}
nums = [2,3,5,1,4,1]
jump(nums)
// @lc code=end
