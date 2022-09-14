/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  if (tokens.length < 2) {
    return parseInt(tokens[tokens.length - 1])
  }
  let stack = []
  let set = new Set(['+', '-', '*', '/'])
  let ans = ''
  for (let key of tokens) {
    if(set.has(key)) {
      const p1 = parseInt(stack.pop())
      const p2 = parseInt(stack.pop())
      let res = ''
      if (key === '+') {
        res = p2 + p1
      }else if (key === '-') {
        res = p2 - p1
      }else if (key === '*') {
        res = p2 * p1
      }else if (key === '/') {
        res = parseInt(p2 / p1)
      }
      ans = res
      stack.push(ans)
    } else {
      stack.push(key)
    }
  }
  return ans
};
// @lc code=end
