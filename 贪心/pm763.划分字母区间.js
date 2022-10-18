/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function(s) {
  let map = new Map()
  let index = 0
  let ans = []
  pre = 0
  // 先找出每个字母的最大下标
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i)
  }
  for (let i = 0; i < s.length; i++) {
    // 更新最大的下标
    index = Math.max(map.get(s[i]), index)
    // 如果下标与i相等则说明找到分割点
    if (index === i) {
      ans.push(index - pre + 1)
      pre = index + 1
    }
  }
  return ans
};

// @lc code=end

