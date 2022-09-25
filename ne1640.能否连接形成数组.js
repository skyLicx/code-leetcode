/*
 * @lc app=leetcode.cn id=1640 lang=javascript
 *
 * [1640] 能否连接形成数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
	const m = arr.length
  const n = pieces.length
  const iMap = new Map()
  for (let i = 0; i < n; i++) {
    iMap.set(pieces[i][0], i)
  }

  for (let i = 0; i < m;) {
    if (!iMap.has(arr[i])) {
      return false
    }
    const index = iMap.get(arr[i])
    const len = pieces[index].length
    for (let j = 0; j < len; j++) {
      if (arr[i + j] !== pieces[index][j]) {
        return false
      }
    }
    i = i + len
  }
  return true
}
arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
canFormArray(arr, pieces)
// @lc code=end
