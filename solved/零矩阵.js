/**
编写一种算法，若M × N矩阵中某个元素为0，则将其所在的行与列清零。

示例 1：

输入：
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
输出：
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
示例 2：

输入：
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
输出：
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/zero-matrix-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // 行数
  const row = matrix.length
  // 列数
  const column = matrix[0].length

  let res = new Array(row).fill(-1).map(() => new Array(column).fill(-1))
  
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < column; j++) {
      if(res[i][j] === -1) {
        res[i][j] = matrix[i][j]
      }
      if(matrix[i][j] === 0) {
        for(let m = 0; m < row; m++) {
          res[m][j] = 0
        }
        for(let n = 0; n < column; n++) {
          res[i][n] = 0
        }
      }
    }
  }
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < column; j++) {
      matrix[i][j] = res[i][j]
    }
  }
  return matrix
}

var setZeroes = function (matrix) {
  // 行数
  const row = matrix.length
  // 列数
  const column = matrix[0].length

  let zeroArr = []
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < column; j++) {
      if(matrix[i][j] === 0) {
        zeroArr.push([i , j])
      }
    }
  }
  for(let item of zeroArr) {
    const r = item[0]
    const c = item[1]
    for(let i = 0; i < column; i++) {
      matrix[r][i] = 0
    }
    for(let i = 0; i < row; i++) {
      matrix[i][c] = 0
    }
  }
  return matrix
}

// 方法一：使用标记数组
var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length

  let row = new Array(m).fill(false)
  let col = new Array(n).fill(false)

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(matrix[i][j] === 0) {
        row[i] = col[j] = true
      }
    }
  }
  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if(row[i] || col[j]) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}

// 方法二：使用两个标记变量
var setZeroes = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length

  // 第一行是否有0
  let flagRow0 = false
  // 第一列是否有0
  let flagCol0 = false

  for(let i = 0; i < m; i++) {
    if(matrix[i][0] === 0) {
      flagCol0 = true
    }
  }
  for(let j = 0; j < n; j++) {
    if(matrix[0][j] === 0) {
      flagRow0 = true
    }
  }

  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(matrix[i][j] === 0) {
        matrix[i][0] = matrix[0][j] = 0
      }
    }
  }
  for(let i = 1; i < m; i++) {
    for(let j = 1; j < n; j++) {
      if(matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0
      }
    }
  }

  if(flagRow0) {
    for(let j = 0; j < n; j++) {
      matrix[0][j] = 0
    }
  }
  if(flagCol0) {
    for(let i = 0; i < m; i++) {
      matrix[i][0] = 0
    }
  }

  return matrix
}

matrix = [
  [1,1,1],
  [1,0,1],
  [1,1,1]
]

console.log(setZeroes(matrix))