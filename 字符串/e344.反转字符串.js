/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	let p1 = 0
	let p2 = s.length - 1
	while (p1 < p2) {
		[s[p1], s[p2]] = [s[p2], s[p1]]
		p1++
		p2--
	}
}
// @lc code=end
