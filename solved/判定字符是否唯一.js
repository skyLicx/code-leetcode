/**
实现一个算法，确定一个字符串 s 的所有字符是否全都不同。

示例 1：

输入: s = "leetcode"
输出: false 
示例 2：

输入: s = "abc"
输出: true
限制：

0 <= len(s) <= 100
如果你不使用额外的数据结构，会很加分。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/is-unique-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
	let iSet = new Set()
	for (let key of astr) {
		if (iSet.has(key)) {
			return false
		} else {
			iSet.add(key)
		}
	}
	return true
}

// 不额外使用数据结构
var isUnique = function (astr) {
	let mark = 0
  for(let key of astr) {
    const move_bit = key.charCodeAt() - 'a'.charCodeAt()
    if ((mark & (1 << move_bit)) != 0){
      return false
    } else {
      mark |= (1 << move_bit)
    }
  }
	return true
}

s = "abc"
console.log(isUnique(s))