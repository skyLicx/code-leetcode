/*
 * @lc app=leetcode.cn id=1592 lang=javascript
 *
 * [1592] 重新排列单词间的空格
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
	let wordArr = []
	let word = ''
	let spaceCount = 0
	for (let i = 0; i < text.length; i++) {
		if (text[i] != ' ') {
			word += text[i]
		} else {
      if (word) {
        wordArr.push(word)
      }
			word = ''
			spaceCount++
		}
	}
  if (word) {
    wordArr.push(word)
  }
  
  let step = Math.floor(spaceCount / ((wordArr.length - 1) || 1))
  let last = spaceCount % (wordArr.length - 1)
  
  let stepSpace = ''
  for(let i = 0; i < step; i++) {
    stepSpace += ' '
  }
  if (wordArr.length == 1) {
    return wordArr[0] + stepSpace
  }

  let lastSpace = ''
  while(last > 0) {
    lastSpace += ' '
    last--
  }
  let ans = ''
  for (let i = 0; i < wordArr.length - 1; i++) {
    ans += (wordArr[i] + stepSpace)
  }
  ans += (wordArr[wordArr.length - 1] + lastSpace)
  return ans
}
// @lc code=end
