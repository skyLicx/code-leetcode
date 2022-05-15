/**
给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。

你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。

示例 1：

输入：num1 = "11", num2 = "123"
输出："134"
示例 2：

输入：num1 = "456", num2 = "77"
输出："533"
示例 3：

输入：num1 = "0", num2 = "0"
输出："0"

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/add-strings
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 双指针
var addStrings = function (num1, num2) {
  let arr = []
	num1 = num1.split('')
	num2 = num2.split('')
	let p1 = num1.length - 1
	let p2 = num2.length - 1
	let curSum = 0
	while (p1 >= 0 || p2 >=0) {
		if(p1 < 0) {
      curSum = parseInt(num2[p2]) + parseInt(curSum / 10)
      p2--
    }else if(p2 < 0) {
      curSum = parseInt(num1[p1]) + parseInt(curSum / 10)
      p1--
    } else {
      curSum = parseInt(num1[p1]) + parseInt(num2[p2]) + parseInt(curSum / 10)
      p1--
      p2--
    }
    arr.unshift(curSum % 10)
	}
  curSum = parseInt(curSum / 10)
  if(curSum > 0) {
    arr.unshift(curSum)
  }
  return arr.join('')
}

// 优化
var addStrings = function (num1, num2) {
  let arr = []
	let p1 = num1.length - 1
	let p2 = num2.length - 1
	let add = 0
	while (p1 >= 0 || p2 >=0 || add != 0) {
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

num1 = "9333852702227987"
num2 = "85731737104263"
// num1 = '1'
// num2 = '9'
// 9419584439332250
console.log(addStrings(num1, num2))
