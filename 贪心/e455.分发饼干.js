/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
	g.sort((a, b) => a - b)
	s.sort((a, b) => a - b)
	let left = 0
	for (let i = 0; i < s.length; i++) {
		if (left < g.length && g[left] <= s[i]) {
			left++
		}
	}
	return left
}

// @lc code=end
