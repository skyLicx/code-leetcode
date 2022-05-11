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
 */

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
	intervals.sort((v1, v2) => v1[0] - v2[0])
	const res = [intervals[0]]
	let m = 0
	for (let i = 1; i < intervals.length; i++) {
		if (res[m][1] === intervals[i][0]) {
			res[m] = [res[m][0], intervals[i][1]]
			continue
		}
		if (res[m][1] < intervals[i][0]) {
			m++
			res[m] = [intervals[i][0], intervals[i][1]]
			continue
		}
		if (res[m][0] <= intervals[i][0] && res[m][1] <= intervals[i][1]) {
			res[m] = [res[m][0], intervals[i][1]]
			continue
		}
		if (res[m][0] >= intervals[i][0] && res[m][1] <= intervals[i][1]) {
			res[m] = [intervals[i][0], intervals[i][1]]
			continue
		}
		if (res[m][0] >= intervals[i][0] && res[m][1] >= intervals[i][1]) {
			res[m] = [intervals[i][0], res[m][1]]
			continue
		}
	}
	return res
}

// 优化
var merge = function (intervals) {
  // 排序
	intervals.sort((v1, v2) => v1[0] - v2[0])
	let res = [intervals[0]]
	let pre = intervals[0]
	for (let i = 1; i < intervals.length; i++) {
		let cur = intervals[i]
    // 如果有重合部分
		if (pre[1] >= cur[0]) {
			pre[1] = Math.max(pre[1], cur[1])
		} else {
			res.push(cur)
			pre = cur
		}
	}
	return res
}

intervals = [
	[1, 4],
	[0, 0],
]

console.log(merge(intervals))
