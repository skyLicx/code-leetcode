/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var canJump = function(nums) {
//   if (nums.length <= 1) return true
//   let index = 0
//   for (let i = 0; i < nums.length - 1; i++) {
//     const len = i + nums[i]
//     if (len >= nums.length - 1) return true
//     if (nums[i] === 0) return false
//     let max = len
//     for (let j = i + 1; j <= i + nums[i]; j++) {
//       if (j + nums[j] >= max) {
//         max = j + nums[j]
//         index = j
//       }
//     }
//     i = index - 1
//   }
//   return false
// };
var canJump = function (nums) {
	if (nums.length <= 1) return true
  // 覆盖范围
	let cover = 0
	for (let i = 0; i <= cover; i++) {
    // 不断更新最大覆盖范围
		cover = Math.max(cover, i + nums[i])
		if (cover >= nums.length - 1) {
			return true
		}
	}
	return false
}
nums = [3, 2, 1, 0, 4]
console.log(canJump(nums))
// @lc code=end
