/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	let num = 1
	let top = 0
	let left = 0
	let right = n - 1
	let bottom = n - 1
	let ans = new Array(n).fill(0).map(() => new Array(n).fill(0))
	while (left <= right && top <= bottom) {
		for (let column = left; column <= right; column++) {
			ans[top][column] = num
			num++
		}
		for (let row = top + 1; row <= bottom; row++) {
			ans[row][right] = num
			num++
		}
		if (left < right && top < bottom) {
			for (let column = right - 1; column > left; column--) {
				ans[bottom][column] = num
				num++
			}
			for (let row = bottom; row > top; row--) {
				ans[row][left] = num
				num++
			}
		}
		top++
		left++
		right--
		bottom--
	}
	return ans
}
n = 4
console.log(generateMatrix(n))
// @lc code=end
