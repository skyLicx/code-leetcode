/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let arr = []
    let p1 = 0
    let p2 = 1
    let temp = p1
    while(p1 < nums.length || p2 < nums.length) {
        if (nums[p2] != nums[temp] + 1) {
            arr.push([nums[p1]])
            p1 = p2
        } else {
            while (nums[p2] == nums[temp] + 1) {
                temp = p2
                p2++
            }
            p2 = p2 - 1
            arr.push([nums[p1], nums[p2]])
            p1 = p2 + 1
        }
        p2 = p1 + 1
        temp = p1
    }
    let res = []
    arr.map(item => {
        res.push(item.join('->'))
    })
    return res
};
// @lc code=end
