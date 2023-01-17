/*
 * @lc app=leetcode.cn id=1814 lang=javascript
 *
 * [1814] 统计一个数组中好对子的数目
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairs = function (nums) {
  const MOD = 1000000007;
  let res = 0
  let map = new Map()
  for(let i of nums) {
    let j = 0
    let temp = i
    while(temp > 0) {
        j = j * 10 + temp % 10
        temp = Math.floor(temp / 10)
    }
    res = (res + (map.get(i - j) || 0)) % MOD
    map.set(i - j, (map.get(i - j) || 0) + 1)
  }
  return res
};
// @lc code=end
