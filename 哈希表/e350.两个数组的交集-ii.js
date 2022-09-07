/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let map1 = new Map()
  let ans = []
  for (let i = 0; i < nums1.length; i++) {
    const count = map1.get(nums1[i])
    map1.set(nums1[i], (count || 0) + 1)
  }
  for (let j = 0; j < nums2.length; j++) {
    const count = map1.get(nums2[j])
    if (count) {
      map1.set(nums2[j], count - 1)
      ans.push(nums2[j])
    } else {
      map1.delete(nums2[j])
    }
  }
  return ans
};
// @lc code=end

