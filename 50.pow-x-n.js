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
	if (n == 0) {
		return 1
	}
	let t = myPow(x, parseInt(n / 2))
	if (n % 2 == 1) {
		return t * t * x
	}
	return t * t
}

x = 2
n = 6
console.log(myPow(x, n))
// @lc code=end
