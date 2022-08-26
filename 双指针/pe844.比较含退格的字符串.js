/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/* var backspaceCompare = function (s, t) {
	let sStack = []
	for (let key of s) {
		if (key !== '#') {
			sStack.push(key)
		} else {
			sStack.pop()
		}
	}
	let tStack = []
	for (let key of t) {
		if (key !== '#') {
			tStack.push(key)
		} else {
			tStack.pop()
		}
	}
	return sStack.toString() === tStack.toString()
} */
var backspaceCompare = function (s, t) {
  let sSkip = 0
  let tSkip = 0
  let i = s.length - 1
  let j = t.length - 1
  while(i >=0 || j >=0) {
    while(i >=0) {
      // 遇到#号
      if (s[i] === '#') {
        // 跳转标识加1
        sSkip++
        i--
      } else {
        // 如果跳转表示大于1 标识减去1
        if (sSkip > 0) {
          sSkip--
          i--
        } else {
          break
        }
      }
    }
    while(j >=0) {
      if (t[j] === '#') {
        tSkip++
        j--
      } else {
        if (tSkip > 0) {
          tSkip--
          j--
        } else {
          break
        }
      }
    }
    if (s[i] !== t[j]) return false
    i--
    j--
  }
  return true
}
// @lc code=end
