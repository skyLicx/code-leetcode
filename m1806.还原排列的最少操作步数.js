/*
 * @lc app=leetcode.cn id=1806 lang=javascript
 *
 * [1806] 还原排列的最少操作步数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  let init = []
  let perm = []
  let arr = []
  let count = 0
  for (let i = 0; i < n; i++) {
    perm[i] = i
    init[i] = i
  }
  while (true) {
    count++
    for (let i = 0; i < n; i++) {
      if (i % 2 == 0) {
        arr[i] = perm[i / 2]
      } else {
        arr[i] = perm[n / 2 + (i - 1) / 2]
      }
    }
    if (arr.toString() == init.toString()) {
      return count
    } else {
      perm = [...arr]
    }
  }
};
// @lc code=end

n = 2
console.log(reinitializePermutation(n))