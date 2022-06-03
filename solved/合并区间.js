/**
以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回 一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间 。

示例 1：

输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
示例 2：

输入：intervals = [[1,4],[4,5]]
输出：[[1,5]]
解释：区间 [1,4] 和 [4,5] 可被视为重叠区间。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/merge-intervals
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((val1, val2) => val1[0] - val2[0])
  let res = [intervals[0]]
  for(let i = 1; i < intervals.length; i++) {
    if(res[res.length - 1][1] >= intervals[i][0]) {
      const end = Math.max(res[res.length - 1][1], intervals[i][1])
      res[res.length - 1][1] = end
    } else {
      res.push(intervals[i])
    }
  }
  return res
}


var merge = function (intervals) {
  intervals.sort((val1, val2) => val1[0] - val2[0])
  let res = [intervals[0]]
  let pre = intervals[0]
  for(let i = 1; i < intervals.length; i++) {
    let cur = intervals[i]
    if(pre[1] >= cur[0]) {
      pre[1] = Math.max(pre[1], cur[1])
    } else {
      res.push(cur)
      pre = cur
    }
  }
  return res
}

intervals = [[1,7],[-3,7],[15,18],[8,10]]
console.log(merge(intervals))
