/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

/* 思路
拿这个nums数组来举例，首先将数组排序，然后有一层for循环，i从下标0的地方开始，同时定一个下标left 定义在i+1的位置上，定义下标right 在数组结尾的位置上。

依然还是在数组中找到 abc 使得a + b +c =0，我们这里相当于 a = nums[i]，b = nums[left]，c = nums[right]。

接下来如何移动left 和right呢， 如果nums[i] + nums[left] + nums[right] > 0 就说明 此时三数之和大了，因为数组是排序后了，所以right下标就应该向左移动，这样才能让三数之和小一些。

如果 nums[i] + nums[left] + nums[right] < 0 说明 此时 三数之和小了，left 就向右移动，才能让三数之和大一些，直到left与right相遇为止。 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	nums.sort((a, b) => a - b)
	let ans = []
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			return ans
		}
    // 去重
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue
		}
		let left = i + 1
		let right = nums.length - 1
		while (left < right) {
			let sum = nums[i] + nums[left] + nums[right]
			if (sum < 0) {
				left++
			} else if (sum > 0) {
				right--
			} else {
				ans.push([nums[i], nums[left], nums[right]])
        // 去重
				while (left < right && nums[left + 1] === nums[left]) {
					left++
				}
				while (left < right && nums[right - 1] === nums[right]) {
					right--
				}
				left++
				right--
			}
		}
	}
	return ans
}
// 写法二
/* var threeSum = function (nums) {
	nums.sort((a, b) => a - b)
	let ans = []
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] > 0) {
			return ans
		}
    // 去重
		if (i > 0 && nums[i] === nums[i - 1]) {
			continue
		}
    let k = nums.length - 1
		for (let j = i + 1; j < nums.length; j++) {
      // 去重
      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }
      while (j < k && nums[i] + nums[j] + nums[k] > 0) {
        k--
      }
      if (j == k) {
        break
      }
      if (nums[i] + nums[j] + nums[k] === 0) {
        ans.push([nums[i], nums[j], nums[k]])
      }
    }
	}
	return ans
} */
nums = [-3, 0, 3, 3, 3, 3]
console.log(threeSum(nums))
// @lc code=end
