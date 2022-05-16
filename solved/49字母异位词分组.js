/**
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的字母得到的一个新单词，所有源单词中的字母通常恰好只用一次。

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/group-anagrams
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	let arr = []
	for (let i = 0; i < strs.length; i++) {
		let fil = new Array(26).fill(-1)
		for (let key of strs[i]) {
			fil[key.charCodeAt() - 'a'.charCodeAt()]++
		}
		arr.push(fil)
	}
	let obj = {}
	for (let i = 0; i < arr.length; i++) {
		if (obj[arr[i].join('')]) {
			obj[arr[i].join('')].push(strs[i])
		} else {
			obj[arr[i].join('')] = [strs[i]]
		}
	}
	let res = []
	for (let key in obj) {
		res.push(obj[key])
	}
	return res
}
// 优化
var groupAnagrams = function (strs) {
	let obj = {}
	for (let i = 0; i < strs.length; i++) {
		let count = new Array(26).fill(0)
		for (let key of strs[i]) {
			count[key.charCodeAt() - 'a'.charCodeAt()]++
		}
		obj[count] ? obj[count].push(strs[i]) : (obj[count] = [strs[i]])
	}
	return Object.values(obj)
}
// 哈希
var groupAnagrams = function (strs) {
	let iMap = new Map()
	for (let str of strs) {
		let arr = Array.from(str)
		arr.sort()
    const key = arr.toString()
    let list = iMap.get(key) ? iMap.get(key) : new Array()
    list.push(str)
    iMap.set(key, list)
	}
  return Array.from(iMap.values())
}
strs = ['bdddddddddd', 'bbbbbbbbbbc']
// strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
console.log(groupAnagrams(strs))
