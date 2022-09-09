/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  nums.sort((a ,b) => a - b)
  let ans = []
  for(let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      let left = j + 1
      let right = nums.length - 1
      while(left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right]
        if (sum < target) {
          left++
        } else if (sum > target) {
          right--
        } else {
          ans.push([nums[i], nums[j], nums[left], nums[right]])
          while (left < right && nums[left] == nums[left + 1]) {
            left++
          }
          while (left < right && nums[right] == nums[right - 1]) {
            right--
          }
          left++
          right--
        }
      }
    }
  }
  return ans
};
// @lc code=end

