/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
// 暴力解法
/* var minSubArrayLen = function (target, nums) {
  const n = nums.length
	let ans = Infinity
	for (let i = 0; i < n; i++) {
		let sum = 0
		for (let j = i; j < n; j++) {
			sum += nums[j]
			if (sum >= target) {
				ans = Math.min(ans, j - i + 1)
				break
			}
		}
	}
	return ans == Infinity ? 0 : ans
} */

// 滑动窗口
/* 思路
创建一个end到satrt的和范围 如果和小于给定值则end++
则计算end到start的距离  然后让和减去start指向的值 start-- 直到和小于给定值
重复上述步骤 */
var minSubArrayLen = function (target, nums) {
	let sum = 0
	let ans = Infinity
	let start = 0
	let end = 0
	while (end < nums.length) {
		sum += nums[end]
		while (sum >= target) {
			ans = Math.min(ans, end - start + 1)
			sum -= nums[start]
      start++
		}
		end++
	}
  return ans == Infinity ? 0 : ans
}
target = 7
nums = [2,3,1,2,4,3]
console.log(minSubArrayLen(target, nums))
// @lc code=end
