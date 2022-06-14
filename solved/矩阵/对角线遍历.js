/**
给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素
示例 1：

输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,4,7,5,3,6,8,9]
示例 2：

输入：mat = [[1,2],[3,4]]
输出：[1,2,3,4]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/diagonal-traverse
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

var findDiagonalOrder = function (mat) {
  let x = 0 // 横向
  let y = 0 // 纵向
  let m = mat.length // 纵向长度
  let n = mat[0].length // 横向长度
  let direction = 'up' // up右上移动 down左下移动

  let res = []
  for(let i = 0; i < m * n; i++) {
    res.push(mat[y][x])
    if(direction === 'up') {
      if(x + 1 > n - 1) {
        y += 1
        direction = 'dowm'
        continue
      }
      if(y - 1 < 0) {
        x += 1
        direction = 'dowm'
        continue
      }
      x += 1
      y -= 1
    } else {
      if(y + 1 > m - 1) {
        x += 1
        direction = 'up'
        continue
      }
      if(x - 1 < 0) {
        y += 1
        direction = 'up'
        continue
      }
      y += 1
      x -= 1
    }
  }
  return res
}

mat = [[1,2],[3,4]]
console.log(findDiagonalOrder(mat))
