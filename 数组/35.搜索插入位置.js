/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function(nums, target) {
//   let left = 0
//   let right = nums.length
//   while(left < right) {
//     const mid = left + Math.floor((right - left) / 2)
//     if (nums[mid] < target) {
//       if (nums[mid + 1] > target) {
//         return mid + 1
//       }
//       left = mid + 1
//     } else if (nums[mid] > target){
//       if (nums[mid - 1] < target) {
//         return mid
//       }
//       right = mid
//     } else {
//       return mid
//     }
//   }
//   return left
// }
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length
  while(left < right) {
    const mid = left + Math.floor((right - left) / 2)
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] >= target){
      right = mid
    }
  }
  return left
}
nums = [1,3,5,6]
target = 5
searchInsert(nums, target)
// @lc code=end

