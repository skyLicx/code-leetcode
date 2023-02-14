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
var minSubArrayLen = function(target, nums) {
    let sum = 0
    sum = nums.reduce((total, item) => {
        return total += item
    })
    // 如果总和小于target返回0
    if (sum < target) return 0
    let result = Infinity
    let p1 = 0
    let p2 = 0
    let sum2 = 0
    while(p2 < nums.length) {
        sum2 += nums[p2]
        while(sum2 >= target) {
            result = Math.min(result, p2 - p1 + 1)
            sum2 -= nums[p1]
            p1++
        }
        p2++
    }
    return result
};
// @lc code=end
