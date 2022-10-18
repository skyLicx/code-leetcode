/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function(intervals) {
//   intervals.sort((a, b) => {
//     return a[0] - b[0]
//   })
//   let start = intervals[0][0]
//   let end = intervals[0][1]
//   let ans = [[start, end]]
//   for (let i = 1; i < intervals.length; i++) {
//     if (intervals[i][0] <= end) {
//       start = Math.min(start, intervals[i][0])
//       end = Math.max(end, intervals[i][1])
//       ans[ans.length - 1][0] = start
//       ans[ans.length - 1][1] = end
//     } else {
//       start = intervals[i][0]
//       end = intervals[i][1]
//       ans.push([start, end])
//     }
//   }
//   return ans
// };
var merge = function(intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  let pre = intervals[0]
  let ans = []
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]
    if (cur[0] <= pre[1]) {
      pre[1] = Math.max(cur[1], pre[1])
    } else {
      ans.push(pre)
      pre = cur
    }
  }
  ans.push(pre)
  return ans
};

// @lc code=end

