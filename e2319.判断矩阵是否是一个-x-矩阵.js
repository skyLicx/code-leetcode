/*
 * @lc app=leetcode.cn id=2319 lang=javascript
 *
 * [2319] 判断矩阵是否是一个 X 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
  let row = grid.length
  let column = grid[0].length
  for(let i = 0; i < row; i++) {
    for(let j = 0; j < column; j++) {
      // 对角线 i == j对角线，i + j == row - 1反对角线
      if (i == j || i + j == row - 1) {
        if (grid[i][j] == 0) return false
      } else {
        if (grid[i][j] !== 0) return false
      }
    }
  }
  return true
};
// @lc code=end
