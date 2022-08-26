/*
 * @lc app=leetcode.cn id=1460 lang=javascript
 *
 * [1460] 通过翻转子数组使两个数组相等
 */

// @lc code=start
/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
// var canBeEqual = function(target, arr) {
//   target.sort((a, b) => a - b)
//   arr.sort((a, b) => a - b)
//   if (target.toString() === arr.toString()) {
//     return true
//   }
//   return false
// };
var canBeEqual = function(target, arr) {
  const targetMap = new Map()
  for(const num of target) {
    targetMap.set(num, (targetMap.get(num) || 0) + 1)
  }
  for(let num of arr) {
    targetMap.set(num, (targetMap.get(num) || 0) - 1)
  }
  for(const value of targetMap.values()) {
    if (value !== 0) {
      return false
    }
  }
  return true
};
// @lc code=end

