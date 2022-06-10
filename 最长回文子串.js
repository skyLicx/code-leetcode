/**
给你一个字符串 s，找到 s 中最长的回文子串。
 
示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-palindromic-substring
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	let res = ''
	for (let i = 0; i < s.length; i++) {
		let str = ''
		str2 = fn(i, i, s)
		str1 = fn(i, i + 1, s)
		str = str1.length > str2.length ? str1 : str2
		res = str.length > res.length ? str : res
	}
	return res
}
let fn = (p1, p2, s) => {
	if (s[p1] !== s[p2]) return s.substring(p1, p2)
	while (p1 > 0 && p2 < s.length) {
		p1--
		p2++
		if (s[p1] !== s[p2]) {
			return s.substring(p1 + 1, p2)
		}
	}
	return s.substring(p1, p2 + 1)
}

var longestPalindrome = function (s) {
	if (s.length === 1) {
		return s
	}
	const filter = (p1, p2) => {
		while (p1 >= 0 && p2 < s.length && s[p1] === s[p2]) {
			p1--
			p2++
		}
    // p1 = p1 + 1; p2 = p2 - 1; p2 + 1 - p1 = p2 - p1 - 1
		if (p2 - p1 - 1 > res.length) {
			res = s.substring(p1 + 1, p2)
		}
	}
	let res = ''
	for (let i = 0; i < s.length; i++) {
		filter(i, i)
		filter(i, i + 1)
	}
	return res
}

s = 'cbbc'
console.log(longestPalindrome(s))
