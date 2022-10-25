/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 递归
/* var fib = function (n) {
	if (n === 0) {
		return n
	} else if (n === 1) {
		return 1
	} else {
    return fib(n - 1) + fib(n - 2)
	}
} */
// 动态规划
var fib = function (n) {
	if (n === 0) return 0
	if (n === 1) return 1
	let pre1 = 0
  let pre2 = 1
	let sum = 0
	for (let i = 1; i < n; i++) {
		sum = pre1 + pre2
		pre1 = pre2
		pre2 = sum
	}
	return pre2
}
// @lc code=end
