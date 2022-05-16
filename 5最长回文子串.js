/**
给你一个字符串 s，找到 s 中最长的回文子串。

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "c

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-palindromic-substring
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
	if (s.length === 1) {
		return s
	}
	let res = ''
	const filter = (left, right) => {
		while (left >= 0 && right < s.length && s[left] === s[right]) {
			left--
			right++
		}
		if (right - left - 1 > res.length) {
			res = s.slice(left + 1, right)
		}
	}
	for (let i = 0; i < s.length; i++) {
		filter(i, i)
		filter(i, i + 1)
	}

	return res
}

s = 'baba'
console.log(longestPalindrome(s))
