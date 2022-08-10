/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
	return n >= 0 ? quickMul(x, n) : 1.0 / quickMul(x, -n)
}
const quickMul = (x, n) => {
	if (n === 0) {
		return 1
	}
	const y = quickMul(x, parseInt(n / 2))
	return n % 2 === 0 ? y * y : y * y * x
}
// @lc code=end
