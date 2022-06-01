/**
给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。

示例 1：

输入: s1 = "abc", s2 = "bca"
输出: true 
示例 2：

输入: s1 = "abc", s2 = "bad"
输出: false
说明：

0 <= len(s1) <= 100
0 <= len(s2) <= 100

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/check-permutation-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
// 方法一
var CheckPermutation = function (s1, s2) {
  if(s1.length !== s2.length) return false
	s1 = s1.split('').sort().join('')
	s2 = s2.split('').sort().join('')
	return s1 === s2
}

// 方法二
var CheckPermutation = function (s1, s2) {
  if(s1.length !== s2.length) return false
	let arr1 = new Array(25).fill(0)
  for(let key of s1) {
    const index = key.charCodeAt() - 'a'.charCodeAt()
    arr1[index] = ++arr1[index] || 1
  }
  for(let key of s2) {
    const index = key.charCodeAt() - 'a'.charCodeAt()
    arr1[index] -= 1
  }
  for(let key of arr1) {
    if(key !== 0) {
      return false
    }
  }
  return true
}

;(s1 = 'abca'), (s2 = 'cade')
console.log(CheckPermutation(s1, s2))
