/**
给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。

注意：不能使用任何内置的 BigInteger 库或直接将输入转换为整数。

示例 1:

输入: num1 = "2", num2 = "3"
输出: "6"
示例 2:

输入: num1 = "123", num2 = "456"
输出: "56088"

提示：
1 <= num1.length, num2.length <= 200
num1 和 num2 只能由数字组成。
num1 和 num2 都不包含任何前导零，除了数字0本身。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/multiply-strings
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 做加法
var multiply = function (num1, num2) {
	if (num1 === '0' || num2 === '0') {
		return '0'
	}
	let ans = '0'
	const m = num1.length
	const n = num2.length
	for (let i = n - 1; i >= 0; i--) {
		let cur = []
		let add = 0
		for (let j = n - 1; j > i; j--) {
			cur.push(0)
		}
		let y = num2.charAt(i) - '0'
		for (let j = m - 1; j >= 0; j--) {
			let x = num1.charAt(j) - '0'
			let product = x * y + add
			cur.push(product % 10)
			add = parseInt(product / 10)
		}
		if (add != 0) {
			cur.push(add % 10)
		}
		ans = addStrings(ans, cur.reverse().join(''))
	}
	return ans
}

var addStrings = function (num1, num2) {
	let arr = []
	let p1 = num1.length - 1
	let p2 = num2.length - 1
	let add = 0
	while (p1 >= 0 || p2 >= 0 || add != 0) {
		const x = num1[p1] ? num1[p1] - '0' : 0
		const y = num2[p2] ? num2[p2] - '0' : 0
		add = x + y + add
		arr.unshift(add % 10)
		add = Math.floor(add / 10)
		p1--
		p2--
	}
	return arr.join('')
}
// 做乘法
var multiply = function (num1, num2) {
	let m = num1.length,
		n = num2.length
	// 结果最多为m+n位
	let res = new Array(m + n).fill(0)
	// 从个位数开始逐位相乘
	for (let i = m - 1; i >= 0; i--) {
		for (let j = n - 1; j >= 0; j--) {
			let mul = (num1[i] - 0) * (num2[j] - 0)
			// 乘积在res对应的索引位置
			let p1 = i + j,
				p2 = i + j + 1
			// 叠加到res上
			let sum = mul + res[p2]
			res[p2] = sum % 10
			res[p1] += parseInt(sum / 10)
		}
	}
	// 结果前缀可能存在0（未使用的位）
	let i = 0
	while (i < res.length && res[i] == 0) {
		i++
	}
	// 将计算结果转化成字符串
	let str = ''
	for (; i < res.length; i++) {
		str += res[i]
	}
	return str.length == 0 ? '0' : str
}

var multiply = function (num1, num2) {
	if (num1 === '0' || num2 === '0') {
		return '0'
	}
	var l1 = num1.length,
		l2 = num2.length,
		p = new Array(l1 + l2).fill(0)
	for (var i = l1 - 1; i >= 0; i--) {
		for (var j = l2 - 1; j >= 0; j--) {
			var tmp = num1[i] * num2[j] + p[i + j + 1]
			p[i + j + 1] = tmp % 10
			p[i + j] += 0 | (tmp / 10)
		}
	}
	while (p[0] === 0) {
		p.shift()
	}
	return p.join('')
}

;(num1 = '123'), (num2 = '456')

console.log(multiply(num1, num2))
