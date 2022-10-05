/*
 * @lc app=leetcode.cn id=811 lang=javascript
 *
 * [811] 子域名访问计数
 */

// @lc code=start
/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
	let map = new Map()
	for (let i = 0; i < cpdomains.length; i++) {
		let arr = cpdomains[i].split(' ')
		let addressArr = arr[1].split('.')
		let adr = ''
		for (let j = addressArr.length - 1; j >= 0; j--) {
			if (j == addressArr.length - 1) {
				adr = addressArr[j]
			} else {
				adr = addressArr[j] + '.' + adr
			}
			let count = map.get(adr)
			map.set(adr, (count || 0) + (arr[0] - 0))
		}
	}
	let ans = []
	for (let [key, val] of map.entries()) {
		ans.push(val + ' ' + key)
	}
	return ans
}

// @lc code=end
