/**
URL化。编写一种方法，将字符串中的空格全部替换为%20。假定该字符串尾部有足够的空间存放新增字符，并且知道字符串的“真实”长度。（注：用Java实现的话，请使用字符数组实现，以便直接在数组上操作。）

示例 1：

输入："Mr John Smith    ", 13
输出："Mr%20John%20Smith"
示例 2：

输入："               ", 5
输出："%20%20%20%20%20"
 
提示：

字符串长度在 [0, 500000] 范围内。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/string-to-url-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S, length) {
	let p1 = 0
	let str = ''
	while (p1 < length) {
		if (S[p1] === ' ') {
			str += '%20'
		} else {
			str += S[p1]
		}
    p1++
	}
  return str
}

var replaceSpaces = function (S, length) {
  S = S.split('')
	let p1 = length - 1
	while(p1 >= 0) {
    S[p1] = S[p1] === ' ' ? '%20' : S[p1]
    p1--
  }
  S = S.slice(0, length)
  return S.join('')
}

S = "      "
length = 5
console.log(replaceSpaces(S, length))

a = '123'
a[2] = 4
console.log(a)
