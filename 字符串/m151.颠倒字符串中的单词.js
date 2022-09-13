/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let p1 = 0
  let ans = []
  while(p1 < s.length) {
    if (s[p1] === ' ') {
      p1++
    } else {
      let p2 = p1
      let str = ''
      while(p2 < s.length && s[p2] !== ' ') {
        str += s[p2]
        p2++
      }
      ans.unshift(str)
      p1 = p2
    }
  }
  return ans.join(' ')
}
// @lc code=end
