/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--
  }
  if (i >= 0) {
    let j = nums.length - 1
    while (j >= 0 && nums[i] >= nums[j]) {
      j--
    }
    swap(nums, i, j)
  }
  reverse(nums, i + 1)
  return nums
}

const swap = (nums, i, j) => {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}

const reverse = (nums, start) => {
  let left = start,
    right = nums.length - 1
  while (left < right) {
    swap(nums, left, right)
    left++
    right--
  }
}

// @lc code=end

nums = [4, 5, 3, 6, 2, 1]
console.log(nextPermutation(nums))