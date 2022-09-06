/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let map = new Map()
  for (let key of s) {
    const count = map.get(key)
    map.set(key, (count || 0) + 1)
  }
  for (let key of t) {
    const count = map.get(key)
    if (count - 1 === 0) {
      map.delete(key)
    } else {
      map.set(key, (count || 0) - 1)
    }
  }
  return map.size === 0 ? true : false
};
// @lc code=end

