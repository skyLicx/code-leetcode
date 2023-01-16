/*
 * @lc app=leetcode.cn id=1658 lang=javascript
 *
 * [1658] 将 x 减到 0 的最小操作数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function (nums, x) {
  const n = nums.length
  const sum = nums.reduce((total, num) => {
    return total + num
  })

  if (sum < x) {
    return -1
  }

  let right = 0
  let lsum = 0, rsum = sum
  let ans = n + 1

  for (let left = -1; left < n; ++left) {
    if (left != -1) {
      lsum += nums[left]
    }
    while (right < n && lsum + rsum > x) {
      rsum -= nums[right]
      ++right
    }
    if (lsum + rsum === x) {
      ans = Math.min(ans, (left + 1) + (n - right))
    }
  }

  return ans > n ? -1 : ans
}
// @lc code=end
nums = [1, 1, 3, 2, 5]
x = 5
console.log(minOperations(nums, x))