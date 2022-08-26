/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 暴力解法
/* var sortedSquares = function (nums) {
	for (let i = 0; i < nums.length; i++) {
		nums[i] = nums[i] * nums[i]
	}
	nums.sort((a, b) => a - b)
	return nums
} */

// 双指针
/* 思路
非递减顺序 说明平方后最大的数字不是最左就是最右 */
var sortedSquares = function (nums) {
  let n = nums.length
  let result = new Array(n)
  let k = n - 1
  let p1 = 0
  let p2 = n - 1
  while(p1 <= p2) {
    let l = nums[p1] * nums[p1]
    let r = nums[p2] * nums[p2]
    if (l < r) {
      result[k] = r
      p2--
    } else {
      result[k] = l
      p1++
    }
    k--
  }
  return result
}
// @lc code=end
