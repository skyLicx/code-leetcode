/*
 * @lc app=leetcode.cn id=784 lang=javascript
 *
 * [784] 字母大小写全排列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
	const ans = []
	const backtracking = (arr, index) => {
		while (index < arr.length && isDigit(arr[index])) {
			index++
		}
		if (index === arr.length) {
			ans.push(arr.join(''))
			return
		}
		arr[index] = String.fromCharCode(arr[index].charCodeAt() ^ 32)
		backtracking(arr, index + 1)
		arr[index] = String.fromCharCode(arr[index].charCodeAt() ^ 32)
		backtracking(arr, index + 1)
	}
	backtracking([...s], 0)
	return ans
}
const isDigit = (ch) => {
  return parseFloat(ch).toString() === "NaN" ? false : true;
}

// @lc code=end
