/*
 * @lc app=leetcode.cn id=1700 lang=javascript
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
// var countStudents = function (students, sandwiches) {
// 	let count = 0
// 	while (students.length) {
// 		if (students[0] !== sandwiches[0]) {
// 			count++
// 			students.push(students.shift())
// 		} else {
// 			sandwiches.shift()
// 			students.shift()
// 			count = 0
// 		}
// 		if (count >= students.length) {
// 			return students.length
// 		}
// 	}
//   return 0
// }
var countStudents = function (students, sandwiches) {
	let count0 = 0
  let count1 = 0
  for (let i = 0; i < students.length; i++) {
    if (students[i] === 0) {
      count0++
    } else {
      count1++
    }
  }
  for (let i = 0; i < sandwiches.length; i++) {
    if (sandwiches[i] === 0 && count0 > 0) {
      count0--
    } else if (sandwiches[i] === 1 && count1 > 0) {
      count1--
    } else {
      break
    }
  }
  return count0 + count1
}

// @lc code=end
