/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const matchMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '['],
  ])
  let stack = []
  for (let key of s) {
    if (!matchMap.has(key)) {
      stack.push(key)
    } else {
      const matchKey = matchMap.get(key)
      if (stack[stack.length - 1] !== matchKey) return false
      stack.pop()
    }
  }
  return !stack.length
};
isValid("()")
// @lc code=end

