/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const ans = []
  const path = []

  const backtracking = (s, startIndex) => {
    const len = path.length
    if (len > 4) return
    if (len === 4 && startIndex === s.length) {
      ans.push(path.join('.'))
      return
    }
    for (let i = startIndex; i < s.length; i++) {
      const str = s.substring(startIndex, i + 1)
      // 最大为255
      if (str > 255) break
      // 不能含有前导 0
      if (str.length > 1 && str[0] === '0') break
      path.push(str)
      backtracking(s, i + 1)
      path.pop()
    }
  }
  backtracking(s, 0)
  return ans
};
s = "25525511135"
restoreIpAddresses(s)
// @lc code=end

