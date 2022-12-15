/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
	const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0))
	let numOfZeros, numOfOnes

	for (let str of strs) {
		numOfZeros = 0
		numOfOnes = 0

		for (let c of str) {
			if (c === '0') {
				numOfZeros++
			} else {
				numOfOnes++
			}
		}

		for (let i = m; i >= numOfZeros; i--) {
			for (let j = n; j >= numOfOnes; j--) {
				dp[i][j] = Math.max(dp[i][j], dp[i - numOfZeros][j - numOfOnes] + 1)
			}
		}
	}

	return dp[m][n]
}
// @lc code=end
