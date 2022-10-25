/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const n = s.length
	const map = new Map([
		['I', 1],
		['V', 5],
		['X', 10],
		['L', 50],
		['C', 100],
		['D', 500],
		['M', 1000],
	])
	let sum = 0
	for (let i = 0; i < n; i++) {
		const value = map.get(s[i])
    // 若一个数字右侧的数字比它大，则将该数字的符号取反
		if (i < n - 1 && value < map.get(s[i + 1])) {
			sum -= value
		} else {
			sum += value
		}
	}
	return sum
}
// @lc code=end
