/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
// 暴力解法
/* var sumSubarrayMins = function (arr) {
  const MOD = 1000000007
	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		let j = i
		let min = arr[i]
		while (j < arr.length) {
			min = Math.min(min, arr[j])
			sum += min
			if (sum >= MOD) {
				sum -= MOD
			}
      j++
		}
	}
	return sum
} */

// @lc code=end
