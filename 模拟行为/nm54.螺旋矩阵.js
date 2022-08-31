/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
	let top = 0
  let left = 0
  let right = matrix[0].length - 1
  let bottom = matrix.length - 1
	let ans = []
	while (left <= right && top <= bottom) {
		for (let column = left; column <= right; column++) {
			ans.push(matrix[top][column])
		}
		for (let row = top + 1; row <= bottom; row++) {
			ans.push(matrix[row][right])
		}
		if (top < bottom && left < right) {
			for (let column = right - 1; column > left; column--) {
				ans.push(matrix[bottom][column])
			}
			for (let row = bottom; row > top; row--) {
				ans.push(matrix[row][left])
			}
		}
		top++
		left++
		right--
		bottom--
	}
	return ans
}
matrix = [[6,9,7]]
console.log(spiralOrder(matrix))
// @lc code=end
