/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
/* var repeatedSubstringPattern = function (s) {
	let str = ''
	for (let i = 0; i * 2 < s.length - 1; i++) {
		str += s[i]
		let matchStr = str
		while (matchStr.length < s.length && s.indexOf(matchStr) > -1) {
			matchStr += str
		}
		if (matchStr === s) return true
	}
	return false
} */
/* var repeatedSubstringPattern = function (s) {
	const n = s.length
	for (let i = 1; i * 2 <= n; i++) {
		if (n % i == 0) {
			let match = true
			for (let j = i; j < n; j++) {
				if (s.charAt(j) != s.charAt(j - i)) {
					match = false
					break
				}
			}
			if (match) {
				return true
			}
		}
	}
	return false
} */
var repeatedSubstringPattern = function (s) {
  console.log((s + s).indexOf(s, 1))
	return (s + s).indexOf(s, 1) != s.length
}
console.log('abc'.indexOf('abc'), '..')
console.log(repeatedSubstringPattern('abab'))
// @lc code=end
