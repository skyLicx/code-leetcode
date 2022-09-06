/*
 * @lc app=leetcode.cn id=1582 lang=javascript
 *
 * [1582] 二进制矩阵中的特殊位置
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number}
 */
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
	const row = mat.length
	const col = mat[0].length
	let count = 0
	// 每行的和
	let rowsSum = new Array(row).fill(0)
	// 每列的和
	let colsSum = new Array(col).fill(0)
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			rowsSum[i] += mat[i][j]
			colsSum[j] += mat[i][j]
		}
	}
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < col; j++) {
			if (mat[i][j] === 1 && rowsSum[i] === 1 && colsSum[j] === 1) {
				count++
			}
		}
	}
	return count
}
/* var numSpecial = function (mat) {
	let row = mat.length
	let colum = mat[0].length
	let count = 0
	for (let i = 0; i < row; i++) {
		for (let j = 0; j < colum; j++) {
			if (mat[i][j] === 1) {
				let num1 = 0
				for (let m = 0; m < colum; m++) {
					if (mat[i][m] === 1) {
						num1++
					}
				}
				for (let n = 0; n < row; n++) {
					if (mat[n][j] === 1) {
						num1++
					}
				}
				if (num1 === 2) {
					count++
				}
			}
		}
	}
	return count
} */
// @lc code=end
