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
  let matrix = new Array(n).fill().map(() => new Array(n).fill(0))
  let num = 1
  let top = 0
  let left = 0
  let right = n - 1
  let bottom = n - 1
  let len = n * n
  while (num <= len) {
    for (let column = left; column <= right; column++) {
      matrix[top][column] = num
      num++
    }
    for (let row = top + 1; row <= bottom; row++) {
        matrix[row][right] = num
        num++
    }
    if (left < right && top < bottom) {
        for (let column = right - 1; column >= left; column--) {
            matrix[bottom][column] = num
            num++
        }
        for (let row = bottom - 1; row > top; row--) {
            matrix[row][left] = num
            num++
        }
    }
    top++
    left++
    right--
    bottom--
  }
  return matrix
}
// @lc code=end
console.table(generateMatrix(4))
