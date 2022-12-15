/*
 * @lc app=leetcode.cn id=754 lang=javascript
 *
 * [754] 到达终点数字
 */

// @lc code=start
/**
 * @param {number} target
 * @return {number}
 */
var reachNumber = function (target) {
	target = Math.abs(target)
	let k = 0
	while (target > 0) {
		k++
		target -= k
	}
	return target % 2 === 0 ? k : k + 1 + (k % 2)
}
target = 2
reachNumber(target)
// @lc code=end
