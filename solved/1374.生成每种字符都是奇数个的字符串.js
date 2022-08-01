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
	let i = 0
	if (n % 2 === 0) {
		while (i < n - 1) {
			s += 'a'
			i++
		}
		s += 'b'
	} else {
		while (i < n) {
			s += 'a'
			i++
		}
	}
	return s
}
// @lc code=end
