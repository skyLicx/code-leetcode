/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  let set1 = new Set(nums1)
  let set2 = new Set()
  for (let j = 0; j < nums2.length; j++) {
    if (set1.has(nums2[j])) {
      set2.add(nums2[j])
    }
  }
  return [...set2]
};
// @lc code=end

