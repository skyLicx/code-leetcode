/*
 * @lc app=leetcode.cn id=343 lang=javascript
 *
 * [343] 整数拆分
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
	let dp = new Array(n + 1).fill(0)
	dp[2] = 1
	for (let i = 3; i <= n; i++) {
		for (let j = 1; j < i - 1; j++) {
			// 将 i 拆分成 j 和 i-j 的和，且 i-j 不再拆分成多个正整数，此时的乘积是j×(i−j)
			// 将 i 拆分成 j 和 i-j 的和，且 i-j 继续拆分成多个正整数，此时的乘积是j×dp[i - j]
			dp[i] = Math.max(dp[i], Math.max((i - j) * j, dp[i - j] * j))
		}
	}
	return dp[n]
}

// @lc code=end
