/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  s = s.split('')
	for (let i = 0; i < s.length; i += 2 * k) {
		let str = s.slice(i, i + k)
		str = reverseString(str)
		const newS = s.slice(0, i).concat(str).concat(s.slice(i + k))
    s = newS
	}
  s = s.join('')
  return s
}
var reverseString = function (s) {
	let p1 = 0
	let p2 = s.length - 1
	while (p1 < p2) {
		[s[p1], s[p2]] = [s[p2], s[p1]]
		p1++
		p2--
	}
  return s
}
// @lc code=end
