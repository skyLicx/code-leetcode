/**
给定一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点，如果这些点构成一个 回旋镖 则返回 true 。

回旋镖 定义为一组三个点，这些点 各不相同 且 不在一条直线上 。
 
示例 1：

输入：points = [[1,1],[2,3],[3,2]]
输出：true
示例 2：

输入：points = [[1,1],[2,2],[3,3]]
输出：false

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/valid-boomerang
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function (points) {
  let arr = [points[0]]
  let flag1 = true
  let flag2 = true
  for(let i = 1; i < points.length; i++) {
    if(points[i][0] !== points[i - 1][0]) {
      flag1 = false
    }
    if(points[i][1] !== points[i - 1][1]) {
      flag2 = false
    }
    if(points[i][0] === points[i - 1][0] && points[i][1] === points[i - 1][1]) {
      continue
    }
    arr.push(points[i])
  }
  if(arr.length <= 2 || flag1 || flag2) return false
	let res = [(arr[1][1] - arr[0][1]), (arr[1][0] - arr[0][0])]
  let ret = (arr[1][1] - arr[0][1]) / (arr[1][0] - arr[0][0])
	for (let i = 1; i < arr.length - 1; i++) {
		if ((res[0] !== (arr[i + 1][1] - arr[i][1]) || res[1] !== (arr[i + 1][0] - arr[i][0])) && ret !== (arr[i + 1][1] - arr[i][1]) / (arr[i + 1][0] - arr[i][0])) {
      return true
		}
	}
	return false
}

var isBoomerang = function (points) {
	let ratio = [points[1][0] - points[0][0], points[1][1] - points[0][1]]
	for (let i = 1; i < points.length - 1; i++) {
    let newRatioa = [points[i + 1][0] - points[i][0], points[i + 1][1] - points[i][1]]
		if (ratio[0] * newRatioa[1] !== ratio[1] * newRatioa[0]) {
      return true
		}
    ratio = newRatioa
	}
	return false
}

points = [[0,2],[1,1],[1,2]]
console.log(isBoomerang(points))
