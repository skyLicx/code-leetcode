/*
 * @lc app=leetcode.cn id=1807 lang=javascript
 *
 * [1807] 替换字符串中的括号内容
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
  const map = new Map(knowledge)
  let p1 = 0
  let p2 = 0
  let res = ''
  while(p1 < s.length) {
    let word = s[p1]
    if (s[p1] == '(') {
      p2 = p1
      while(s[p2] != ')' && p2 < s.length) {
        p2++
      }
      const key = s.substring(p1 + 1, p2)
      word = map.get(key) || '?'
      p1 = p2
    }
    res += word
    p1++
  }
  return res
};
// @lc code=end
