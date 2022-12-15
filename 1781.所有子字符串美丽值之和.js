/*
 * @lc app=leetcode.cn id=1781 lang=javascript
 *
 * [1781] 所有子字符串美丽值之和
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
	let res = 0
	for (let i = 0; i < s.length; i++) {
		const cnt = new Array(26).fill(0)
		let maxFreq = 0
		for (let j = i; j < s.length; j++) {
			cnt[s[j].charCodeAt() - 'a'.charCodeAt()]++
			maxFreq = Math.max(maxFreq, cnt[s[j].charCodeAt() - 'a'.charCodeAt()])
			let minFreq = s.length
			for (let k = 0; k < 26; k++) {
				if (cnt[k] > 0) {
					minFreq = Math.min(minFreq, cnt[k])
				}
			}
			res += maxFreq - minFreq
		}
	}
	return res
}
// @lc code=end
