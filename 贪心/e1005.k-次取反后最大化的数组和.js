/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var largestSumAfterKNegations = function(nums, k) {
//   nums = nums.sort((a, b) => a - b)
//   let count = 0
//   for (let i = 0; i < k; i++) {
//     if (nums[i] < 0) {
//       nums[i] = -nums[i]
//       count++
//     }
//   }
//   let sum = 0
//   let min = Infinity
//   for (let i = 0; i < nums.length; i++) {
//     sum += nums[i]
//     min = Math.min(min, Math.abs(nums[i]))
//   }
//   let dummy = min
//   k = k - count
//   while(k > 0) {
//     dummy = -dummy
//     k--
//   }
//   if (dummy == -min) {
//     sum -= 2 * min
//   }
//   return sum
// };
var largestSumAfterKNegations = function (nums, k) {
	nums = nums.sort((a, b) => Math.abs(b) - Math.abs(a))
	let sum = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] < 0 && k > 0) {
			nums[i] = -nums[i]
			k--
		}
		sum += nums[i]
	}
	if (k % 2 > 0) {
		sum -= 2 * nums[nums.length - 1]
	}
	return sum
}
// @lc code=end
