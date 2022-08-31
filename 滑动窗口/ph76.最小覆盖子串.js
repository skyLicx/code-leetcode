/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
/* var minWindow = function(s, t) {
  let tMap = new Map()
  for(let key of t) {
    const count = tMap.get(key)
    tMap.set(key, (count || 0) + 1)
  }
  let sMap = new Map()
  let start = 0
  let end = 0
  let ans = s + t
  while(end < s.length) {
    if (tMap.get(s[end])) {
      const count = sMap.get(s[end])
      sMap.set(s[end], (count || 0) + 1)
    }
    while(sMap.size >= tMap.size && check(sMap, tMap)) {
      const str = s.substring(start, end + 1)
      ans = str.length < ans.length ? str : ans
      if (tMap.get(s[start])) {
        const count = sMap.get(s[start])
        sMap.set(s[start], count - 1)
      }
      start++
    }
    end++
  }
  return ans === s + t ? '' : ans
}
const check = (m, n) => {
  for(let [key, value] of n.entries()) {
    if (value > m.get(key)) return false
  }
  return true
} */
var minWindow = function (s, t) {
	let l = 0
	let r = 0
	const need = new Map()
	for (let c of t) {
		need.set(c, need.has(c) ? need.get(c) + 1 : 1)
	}
  // need中字母类型数量
	let needType = need.size
	let res = ''
	while (r < s.length) {
		let c = s[r]
		if (need.has(c)) {
			need.set(c, need.get(c) - 1)
			if (need.get(c) === 0) needType -= 1
		}
    // 如果类型数量为0则说明匹配成功
		while (needType === 0) {
			const newRes = s.substring(l, r + 1)
			if (!res || newRes.length < res.length) res = newRes
			const c2 = s[l]
			if (need.has(c2)) {
				need.set(c2, need.get(c2) + 1)
        // 如果 need.get(c2) === 1则说明当前范围缺少这个字母 字母类型加1
				if (need.get(c2) === 1) needType += 1
			}
			l += 1
		}
		r += 1
	}
	return res
}
;(s = 'ewcwaaaaefgacaefa'), (t = 'caaea')
console.log(minWindow(s, t))
// @lc code=end
