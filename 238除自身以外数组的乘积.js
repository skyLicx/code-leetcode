/**
给你一个整数数组 nums，返回 数组 answer ，其中 answer[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积 。

题目数据 保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内。

请不要使用除法，且在 O(n) 时间复杂度内完成此题。
 
示例 1:

输入: nums = [1,2,3,4]
输出: [24,12,8,6]
示例 2:

输入: nums = [-1,1,0,-3,3]
输出: [0,0,9,0,0]
 

提示：

2 <= nums.length <= 105
-30 <= nums[i] <= 30
保证 数组 nums之中任意元素的全部前缀元素和后缀的乘积都在  32 位 整数范围内
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let L = new Array(nums.length)
  let R = new Array(nums.length)
  let ans = []
  L[0] = 1
  R[nums.length - 1] = 1

  for(let i = 1; i < nums.length; i++) {
    L[i] = L[i - 1] * nums[i - 1]
  }
  for(let i = nums.length - 2; i >= 0; i--) {
    R[i] = L[i + 1] * nums[i + 1]
  }
  for(let i = 0; i < nums.length; i++) {
    ans[i] = L[i] * R[i]
  }
  return ans
}

nums = [1,2,3,4]

console.log(productExceptSelf(nums))