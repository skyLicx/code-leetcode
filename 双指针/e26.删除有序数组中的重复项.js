/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let slow = 1
  let fast = 1
  while(fast < nums.length) {
    // 发现不同的元素就替换
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow
};
// @lc code=end

