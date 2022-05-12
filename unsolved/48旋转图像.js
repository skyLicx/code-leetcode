/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 方法一 辅助数组
var rotate = function (matrix) {
  let len = matrix.length
  let matrixNew = new Array(len).fill(0).map(() => new Array(len).fill(0))
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      matrixNew[j][len - i - 1] = matrix[i][j]
    }
  }
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len; j++) {
      matrix[i][j] = matrixNew[i][j]
    }
  }
  return matrix
}
// 方法二 原地旋转
var rotate = function (matrix) {
  let n = matrix.length
  for(let i = 0; i < Math.floor(n / 2); i++) {
    for(let j = 0; j < Math.floor((n + 1) / 2); j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][i]
      matrix[n - j - 1][i] = matrix[n -i - 1][n - j - 1]
      matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
      matrix[j][n - i - 1] = temp
    }
  }
  return matrix
}

// 方法三 翻转代替旋转
var rotate = function (matrix) {
  let n = matrix.length
  for(let i = 0; i < Math.floor(n / 2); i++) {
    for(let j = 0; j < n; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[n - i - 1][j]
      matrix[n - i - 1][j] = temp
    }
  }
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < i; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  return matrix
}

matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(rotate(matrix))
