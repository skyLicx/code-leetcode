/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
	const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

	const len = digits.length
	if (!len) return []
	if (len === 1) return map[digits].split('')

	let ans = []
	let path = []
	const backtracking = (digits, len, index) => {
		if (path.length === len) {
			ans.push(path.join(''))
			return
		}
    const key = digits[index]
		for (const v of map[key]) {
			path.push(v)
			backtracking(digits, len, index + 1)
			path.pop()
		}
	}
	backtracking(digits, len, 0)
	console.log(ans)
	return ans
}
digits = '23'
letterCombinations(digits)
// @lc code=end
