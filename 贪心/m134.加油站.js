/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  const n = gas.length
  const double = gas.concat(gas)
  let index = 0
  let nowgas = 0
  for (let i = 0; i < double.length; i++) {
    let key = i % n
    if (nowgas + gas[key] - cost[key] >= 0) {
      nowgas += gas[key] - cost[key]
    } else {
      index = i + 1
      nowgas= 0
    }
    if (index + n === i) return index
  }
  return -1
};
// @lc code=end
