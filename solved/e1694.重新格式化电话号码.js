/*
 * @lc app=leetcode.cn id=1694 lang=javascript
 *
 * [1694] 重新格式化电话号码
 */

// @lc code=start
/**
 * @param {string} number
 * @return {string}
 */
var reformatNumber = function (number) {
	let str = ''
	for (let i = 0; i < number.length; i++) {
		if (!isNaN(parseFloat(number[i]))) {
			str += number[i]
		}
	}
	let ans = []
	for (let i = 0; i < str.length; i += 3) {
		const len = i + 3 < str.length ? i + 3 : str.length
		ans.push(str.substring(i, len))
	}
	if (ans[ans.length - 1].length === 1) {
		let str = ans[ans.length - 2] + ans[ans.length - 1]
		ans.pop()
		ans.pop()
		ans.push(str.substring(0, 2))
		ans.push(str.substring(2, 4))
	}
	return ans.join('-')
}
// @lc code=end
