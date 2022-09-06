/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * 根据题目要求，我们需要在字符串 s 寻找字符串 p 的异位词。因为字符串 p 的异位词的长度一定与字符串 p 的长度相同，所以我们可以在字符串 s 中构造一个长度为与字符串 p 的长度相同的滑动窗口，并在滑动中维护窗口中每种字母的数量；当窗口中每种字母的数量与字符串 p 中每种字母的数量相同时，则说明当前窗口为字符串 p 的异位词。
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	const sLen = s.length
	const pLen = p.length
	if (sLen < pLen) {
		return []
	}
	let sWordArr = new Array(26).fill(0)
	let pWordArr = new Array(26).fill(0)
	for (let i = 0; i < pLen; i++) {
		sWordArr[s[i].charCodeAt() - 'a'.charCodeAt()]++
		pWordArr[p[i].charCodeAt() - 'a'.charCodeAt()]++
	}
	let ans = []
	if (sWordArr.toString() === pWordArr.toString()) {
		ans.push(0)
	}
	for (let i = 0; i < sLen - pLen; i++) {
		sWordArr[s[i].charCodeAt() - 'a'.charCodeAt()]--
		sWordArr[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]++
		if (sWordArr.toString() === pWordArr.toString()) {
			ans.push(i + 1)
		}
	}
	return ans
}
// 优化
var findAnagrams2 = function (s, p) {
	const sLen = s.length
	const pLen = p.length
	if (sLen < pLen) {
		return []
	}
	let countArr = new Array(26).fill(0)
	for (let i = 0; i < pLen; i++) {
		countArr[s[i].charCodeAt() - 'a'.charCodeAt()]++
		countArr[p[i].charCodeAt() - 'a'.charCodeAt()]--
	}
	let ans = []
	let differ = 0
	for (let j = 0; j < countArr.length; j++) {
		if (countArr[j] !== 0) {
			differ++
		}
	}
	if (differ === 0) {
		ans.push(0)
	}
	for (let i = 0; i < sLen - pLen; i++) {
		if (countArr[s[i].charCodeAt() - 'a'.charCodeAt()] === 1) {
			// 窗口中字母 s[i] 的数量与字符串 p 中的数量从不同变得相同
			differ--
		} else if (countArr[s[i].charCodeAt() - 'a'.charCodeAt()] === 0) {
			// 窗口中字母 s[i] 的数量与字符串 p 中的数量从相同变得不同
			differ++
		}
		countArr[s[i].charCodeAt() - 'a'.charCodeAt()]--
		if (countArr[s[i + pLen].charCodeAt() - 'a'.charCodeAt()] === -1) {
			// 窗口中字母 s[i+pLen] 的数量与字符串 p 中的数量从不同变得相同
			differ--
		} else if (countArr[s[i + pLen].charCodeAt() - 'a'.charCodeAt()] === 0) {
			// 窗口中字母 s[i+pLen] 的数量与字符串 p 中的数量从相同变得不同
			differ++
		}
		countArr[s[i + pLen].charCodeAt() - 'a'.charCodeAt()]++
		if (differ === 0) {
			ans.push(i + 1)
		}
	}
	return ans
}
;(s = 'abab'), (p = 'ab')
console.log(findAnagrams2(s, p))
// @lc code=end
