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
/* var sortedSquares = function(nums) {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b))
    nums = nums.map(item => {
        return item * item
    })
    return nums
}; */
var sortedSquares = function(nums) {
    // 思路: 有序的话 最大值不是最左就是最右
    let n = nums.length
    let left = 0
    let right = n - 1
    let result = []
    let k = n - 1
    while(left <= right) {
        let l = nums[left] * nums[left]
        let r = nums[right] * nums[right]
        if (l > r) {
            result[k] = l
            left++
        } else {
            result[k] = r
            right--
        }
        k--
    }
    return result
};
// @lc code=end

