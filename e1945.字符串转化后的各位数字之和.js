/*
 * @lc app=leetcode.cn id=1945 lang=javascript
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
  let str = ''
  for (let i = 0; i < s.length; i++) {
    str += s[i].charCodeAt() - 'a'.charCodeAt() + 1
  }
  while(k) {
    let sum = 0
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i])
    }
    str = sum.toString()
    k--
  }
  return parseInt(str)
};

// @lc code=end
