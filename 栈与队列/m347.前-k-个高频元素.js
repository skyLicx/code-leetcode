/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map()
  for (let key of nums) {
    const count = map.get(key)
    map.set(key, (count || 0) + 1)
  }
  let arr = Array.from(map)
  arr.sort((a, b) => b[1] - a[1])
  let ans = []
  for(let i = 0; i < k; i++) {
    ans.push(arr[i][0])
  }
  console.log(ans)
  return ans
};
nums = [1], k = 1
topKFrequent(nums, k)
// @lc code=end

