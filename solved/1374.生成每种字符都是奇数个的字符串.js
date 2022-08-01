/*
 * @lc app=leetcode.cn id=1374 lang=javascript
 *
 * [1374] 生成每种字符都是奇数个的字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
 var generateTheString = function (n) {
	let s = ''
	if (n % 2 === 0) {
		s = 'a'.repeat(n - 1) + 'b'
	} else {
		s = 'a'.repeat(n)
	}
	return s
}
// @lc code=end
