/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// 哈希表
/* var canConstruct = function(ransomNote, magazine) {
  let map = new Map()
  for (let key of magazine) {
    const count = map.get(key)
    map.set(key, (count || 0) + 1)
  }
  for (let key of ransomNote) {
    const count = map.get(key)
    if (!count || count === 0) {
      return false
    }
    map.set(key, count - 1)
  }
  return true
}; */
// 字符统计
var canConstruct = function (ransomNote, magazine) {
	let wordArr = new Array(26).fill(0)
  for (let key of magazine) {
    wordArr[key.charCodeAt() - 'a'.charCodeAt()]++
  }
  for (let key of ransomNote) {
    if (wordArr[key.charCodeAt() - 'a'.charCodeAt()] === 0) {
      return false
    }
    wordArr[key.charCodeAt() - 'a'.charCodeAt()]--
  }
  return true
}
// @lc code=end
