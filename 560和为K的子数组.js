/**
给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

示例 1：

输入：nums = [1,1,1], k = 2
输出：2
示例 2：

输入：nums = [1,2,3], k = 3
输出：2

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/subarray-sum-equals-k
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0
	for(let i = 0; i < nums.length; i++) {
    let sum = 0
    for(let j = i; j >= 0; j--) {
      sum += nums[j]
      if(sum === k) {
        count++
      }
    }
  }
  return count
}

;(nums = [100,1,2,3,4]), (k = 6)
console.log(subarraySum(nums, k))
