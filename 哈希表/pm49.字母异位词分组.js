/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let iMap = new Map()
  for (let i = 0; i < strs.length; i++) {
    let arr = new Array(26).fill(0)
    for (let key of strs[i]) {
      arr[key.charCodeAt() - 'a'.charCodeAt()]++
    }
    arr = arr.toString()
    list = iMap.has(arr) ? iMap.get(arr) : new Array()
    list.push(strs[i])
    iMap.set(arr, list)
  }
  return Array.from(iMap.values())
};
// strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
// console.log(groupAnagrams(strs))
// @lc code=end

