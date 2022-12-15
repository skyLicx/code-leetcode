/*
 * @lc app=leetcode.cn id=1049 lang=javascript
 *
 * [1049] 最后一块石头的重量 II
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
	let len = stones.length
	let sum = stones.reduce((total, item) => {
		return total + item
	})
	const size = parseInt(sum / 2)
	let dp = new Array(size + 1).fill(0)
	for (let i = 0; i < len; i++) {
		for (let j = size; j >= stones[i]; j--) {
			dp[j] = Math.max(dp[j], stones[i] + dp[j - stones[i]])
		}
	}
	return sum - dp[size] - dp[size]
}
// @lc code=end
