/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
	let fiveCount = 0
	let tenCount = 0

	for (let i = 0; i < bills.length; i++) {
		const bill = bills[i]
		if (bill === 5) {
			fiveCount++
		} else if (bill === 10) {
			if (fiveCount) {
				fiveCount--
				tenCount++
			} else {
				return false
			}
		} else {
			if (fiveCount && tenCount) {
				fiveCount--
				tenCount--
			} else if (fiveCount >= 3) {
				fiveCount -= 3
			} else {
				return false
			}
		}
	}
	return true
}
// @lc code=end
