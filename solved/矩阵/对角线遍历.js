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

/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
	let x = 0
	let y = 0
	let direction = 'up'
	let m = mat.length
	let n = mat[0].length
	let count = 0
	let res = []
	while (count < m * n) {
		res.push(mat[y][x])
		count++
		if (direction === 'up') {
			if (x === n - 1) {
				y += 1
				direction = 'down'
			} else if (y === 0) {
        x += 1
				direction = 'down'
			} else {
				x += 1
				y -= 1
			}
		} else {
			if (y === m - 1) {
				x += 1
				direction = 'up'
			} else if (x === 0) {
				y += 1
				direction = 'up'
			} else {
				x -= 1
				y += 1
			}
		}
	}
	return res
}

mat = [[2,5],[8,4],[0,-1]]

console.log(findDiagonalOrder(mat))
