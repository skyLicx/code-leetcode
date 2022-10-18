/*
 * @lc app=leetcode.cn id=406 lang=javascript
 *
 * [406] 根据身高重建队列
 */

// @lc code=start
/**
 * @param {number[][]} people
 * @return {number[][]}
 */
// var reconstructQueue = function(people) {
//   people.sort((a , b) => {
//     if (b[0] - a[0] !== 0) {
//       return b[0] - a[0]
//     } else {
//       return a[1] - b[1]
//     }
//   })
//   for (let i = 0; i < people.length; i++) {
//     let count = i - people[i][1]
//     let j = i
//     while(count) {
//       const temp = people[j - 1]
//       people[j - 1] = people[j]
//       people[j] = temp
//       count--
//       j--
//     }
//   }
//   return people
// };
var reconstructQueue = function (people) {
	people.sort((a, b) => {
		if (b[0] - a[0] !== 0) {
			return b[0] - a[0]
		} else {
			return a[1] - b[1]
		}
	})
	let queue = []
	for (let i = 0; i < people.length; i++) {
		queue.splice(people[i][1], 0, people[i])
	}
	return queue
}

// @lc code=end
