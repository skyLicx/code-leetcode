/**
输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/search-a-2d-matrix-ii
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 二分法
var searchMatrix = function (matrix, target) {
  const searchFn = (arr, value) => {
    let low = 0
    let high = arr.length - 1
    while(low <= high) {
      const mid = low + Math.floor((high - low) / 2)
      if(arr[mid] === value) {
        return true
      }
      if(arr[mid] > value) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return false
  }
  for(let row of matrix) {
    const isSearch = searchFn(row, target)
    if(isSearch) {
      return true
    }
  }
  return false
}

// z字搜索
var searchMatrix = function (matrix, target) {
  const rowLen = matrix.length
  const columnLen = matrix[0].length
  let x = 0
  let y = columnLen - 1
  while(x < rowLen && y >=0) {
    if(matrix[x][y] === target) {
      return true
    }
    if(matrix[x][y] > target) {
      y--
    } else {
      x++
    }
  }
  return false
}

matrix = [[-1, 3]], target = -1
console.log(searchMatrix(matrix, target))
