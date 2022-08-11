/*
 * @lc app=leetcode.cn id=1417 lang=javascript
 *
 * [1417] 重新格式化字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
	let wordArr = []
	let numArr = []
	for (let key of s) {
		if (parseFloat(key).toString() === 'NaN') {
			wordArr.push(key)
		} else {
			numArr.push(key)
		}
	}
	if (Math.abs(wordArr.length - numArr.length) > 1) {
		return ''
	}
  if(numArr.length > wordArr.length) {
    [numArr, wordArr] = [wordArr, numArr]
  }
	let ans = new Array(wordArr.length + numArr.length)
  let index1 = 0
	for (let i = 0; i < wordArr.length; i++) {
		ans[index1] = wordArr[i]
    index1 += 2
	}
  let index2 = 1
	for (let j = 0; j < numArr.length; j++) {
		ans[index2] = numArr[j]
    index2 += 2
	}
  return ans.join('')
}
// @lc code=end
