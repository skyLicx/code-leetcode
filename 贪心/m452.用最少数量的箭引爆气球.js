/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => a[0] - b[0])
  let start = points[0][0]
  let end = points[0][1]
  let count = 1
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] <= end) {
      start = Math.max(start, points[i][0])
      end = Math.min(end, points[i][1])
    } else {
      start = points[i][0]
      end = points[i][1]
      count++
    }
  }
  return count
}

// @lc code=end
