/**
给定一个非负索引 rowIndex，返回「杨辉三角」的第 rowIndex 行。

在「杨辉三角」中，每个数是它左上方和右上方的数的和。

示例 1:

输入: rowIndex = 3
输出: [1,3,3,1]
示例 2:

输入: rowIndex = 0
输出: [1]
示例 3:

输入: rowIndex = 1
输出: [1,1]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/pascals-triangle-ii
 */

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
	let arr = []
	for (let i = 0; i <= rowIndex; i++) {
		let cur = new Array(i + 1).fill(1)
		for (let j = 1; j < i; j++) {
			cur[j] = arr[i - 1][j - 1] + arr[i - 1][j]
		}
		arr.push(cur)
	}
	return arr[rowIndex]
}

// 滚动数组
var getRow = function (rowIndex) {
	let pre = [], cur = []
	for (let i = 0; i <= rowIndex; i++) {
		cur = new Array(i + 1).fill(1)
		for (let j = 1; j < i; j++) {
			cur[j] = pre[j - 1] + pre[j]
		}
    pre = cur
	}
	return pre
}
// 滚动数组优化
var getRow = function (rowIndex) {
	let row = new Array(rowIndex + 1).fill(1)
	for (let i = 0; i < rowIndex; i++) {
		for (let j = i; j > 0; j--) {
			row[j] += row[j - 1]
		}
	}
	return row
}

rowIndex = 3

console.log(getRow(rowIndex))
