/**
给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。

这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

示例1:

输入: pattern = "abba", str = "dog cat cat dog"
输出: true
示例 2:

输入:pattern = "abba", str = "dog cat cat fish"
输出: false
示例 3:

输入: pattern = "aaaa", str = "dog cat cat dog"
输出: false

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/word-pattern
 */
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
	let word2ch = new Map()
	let ch2word = new Map()
	let words = s.split(' ')
	if (pattern.length !== words.length) {
		return false
	}
	for (let [i, word] of words.entries()) {
		const ch = pattern[i]
		if (
			(word2ch.has(word) && word2ch.get(word) != ch) ||
			(ch2word.has(ch) && ch2word.get(ch) !== word)
		) {
			return false
		}
		word2ch.set(word, ch)
		ch2word.set(ch, word)
	}
  console.log(word2ch)
  console.log(ch2word)
	return true
}

;(pattern = 'abba'), (str = 'dog cat cat fish')

console.log(wordPattern(pattern, str))
