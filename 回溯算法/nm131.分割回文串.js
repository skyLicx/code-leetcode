/*
 * @lc app=leetcode.cn id=131 lang=javascript
 *
 * [131] 分割回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  let ans = []
  let path = []
  const backtracking = (s, startIndex) => {
    if (startIndex >= s.length) {
      ans.push([...path])
      return
    }
    for (let i = startIndex; i < s.length; i++) {
      if (isPalindrome(s, startIndex, i)) {
        const str = s.substring(startIndex, i + 1)
        path.push(str)
      } else {
        continue
      }
      backtracking(s, i + 1)
      path.pop()
    }
  }
  backtracking(s, 0)
  console.log(ans)
  return ans
};

const isPalindrome = (s, startIndex, endIndex) => {
  let l = startIndex
  let r = endIndex
  while(l < r) {
    if (s[l] !== s[r]) {
      return false
    }
    l++
    r--
  }
  return true
}
s = "aabcba"
partition(s)
// @lc code=end

