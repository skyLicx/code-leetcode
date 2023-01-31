/*
 * @lc app=leetcode.cn id=2299 lang=javascript
 *
 * [2299] 强密码检验器 II
 */

// @lc code=start
/**
 * @param {string} password
 * @return {boolean}
 */

var strongPasswordCheckerII = function (password) {
  if (password.length < 8) return false
  if (!/[a-z]{1,}/.test(password)) return false
  if (!/[A-Z]{1,}/.test(password)) return false
  if (!/[0-9]{1,}/.test(password)) return false
  if (!/[!@#$%^&*()+-]{1,}/.test(password)) return false

  for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1]) {
      return false
    }
  }
  return true
}
// @lc code=end
