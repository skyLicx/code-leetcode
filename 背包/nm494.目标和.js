/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/**
 * 假设加法的总和为x，那么减法对应的总和就是sum - x
 * 所以我们要求的是 x - (sum - x) = target
 * x = (target + sum) / 2
 */
var findTargetSumWays = function (nums, target) {
	const sum = nums.reduce((a, b) => a + b)

	if (Math.abs(target) > sum) {
		return 0
	}

	if ((target + sum) % 2) {
		return 0
	}

	const halfSum = (target + sum) / 2

	let dp = new Array(halfSum + 1).fill(0)
	dp[0] = 1

	for (let i = 0; i < nums.length; i++) {
		for (let j = halfSum; j >= nums[i]; j--) {
			dp[j] += dp[j - nums[i]]
		}
	}

	return dp[halfSum]
}

nums = [5,3,4,1,2], target = 3
console.log(findTargetSumWays(nums, target))
// @lc code=end
