/**
给定一个区间的集合 intervals ，其中 intervals[i] = [starti, endi] 。返回 需要移除区间的最小数量，使剩余区间互不重叠 。

示例 1:

输入: intervals = [[1,2],[2,3],[3,4],[1,3]]
输出: 1
解释: 移除 [1,3] 后，剩下的区间没有重叠。
示例 2:

输入: intervals = [ [1,2], [1,2], [1,2] ]
输出: 2
解释: 你需要移除两个 [1,2] 来使剩下的区间没有重叠。
示例 3:

输入: intervals = [ [1,2], [2,3] ]
输出: 0
解释: 你不需要移除任何区间，因为它们已经是无重叠的了。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/non-overlapping-intervals
 */

/**
 * @param {number[][]} intervals
 * @return {number}
 */

// 贪心算法
var eraseOverlapIntervals = function (intervals) {
	intervals.sort((v1, v2) => v1[0] - v2[0])
	let count = 0
	for (let i = 0; i < intervals.length - 1; i++) {
		if (intervals[i + 1][0] < intervals[i][1]) {
      intervals[i + 1][1] = Math.min(intervals[i][1], intervals[i + 1][1])
			count++
		}
	}
	return count
}

intervals = [
	[1, 4],
	[1, 3],
	[2, 3],
	[3, 4],
]

console.log(eraseOverlapIntervals(intervals))
