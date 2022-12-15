/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
	let sum = nums.reduce((total, item) => {
		return total + item
	})
	if (sum % 2 > 0) return false
  // 背包容量为和的一半
	const size = sum / 2
	let len = nums.length
	let dp = new Array(size + 1).fill(0)
  // 物品的价值和重量都为nums[i]
	for (let i = 0; i < len; i++) {
		for (let j = size; j >= nums[i]; j--) {
			dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i])
			if (dp[j] === size) {
				return true
			}
		}
	}
	return dp[size] === size
}

// @lc code=end
