/**
给定一个包含大写字母和小写字母的字符串 s ，返回 通过这些字母构造成的 最长的回文串 。

在构造过程中，请注意 区分大小写 。比如 "Aa" 不能当做一个回文字符串。

示例 1:

输入:s = "abccccdd"
输出:7
解释:
我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
示例 2:

输入:s = "a"
输入:1
示例 3:

输入:s = "bb"
输入: 2

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/longest-palindrome
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
	let keyObj = {}
	for (let i = 0; i < s.length; i++) {
		if (keyObj[s[i]]) {
			keyObj[s[i]]++
		} else {
			keyObj[s[i]] = 1
		}
	}
	let ans = 0
	for (let key in keyObj) {
		ans += Math.floor(keyObj[key] / 2) * 2
		if (keyObj[key] % 2 === 1 && ans % 2 === 0) {
			ans++
		}
	}
	return ans
}
/**
解体的关键在于计算有多少对相同的字符。
就类似于打牌，抽到一对牌就打出来。当所有的牌都抽完了，手里如果还有剩余的未成对的牌，我能还能抽出一张。
这里我用set集合来存放抽到的牌，如果当前抽到的牌已经在手里有了，那么把手里的那个牌和当前的牌凑成一对打出来，结果+2。最后如果手里还有牌，结果+1

作者：bugwriter-2
链接：https://leetcode.cn/problems/longest-palindrome/solution/yong-da-pai-de-si-lu-lai-ji-suan-zui-chang-hui-wen/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
// 方法二
var longestPalindrome = function (s) {
	let temp = new Set()
	let sum = 0
	s.split('').forEach((c) => {
		if (temp.has(c)) {
			temp.delete(c)
			sum += 2
		} else {
			temp.add(c)
		}
	})
	return sum + (temp.size > 0 ? 1 : 0)
}

s = 'abba'

console.log(longestPalindrome(s))
