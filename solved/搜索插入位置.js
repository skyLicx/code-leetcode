/**
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 O(log n) 的算法。

示例 1:

输入: nums = [1,3,5,6], target = 5
输出: 2
示例 2:

输入: nums = [1,3,5,6], target = 2
输出: 1
示例 3:

输入: nums = [1,3,5,6], target = 7
输出: 4

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/search-insert-position
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let low = 0
	let high = nums.length - 1
	while (low <= high) {
		const mid = Math.floor(low + (high - low) / 2)
		if (nums[mid] < target) {
			if (target < nums[mid + 1]) {
				return mid + 1
			}
			low = mid + 1
		} else if (nums[mid] > target) {
			high = mid - 1
		} else {
			return mid
		}
	}
  return high + 1
}

nums = [1,3], target = 3
console.log(searchInsert(nums, target))