/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// api解法
var strStr = function (haystack, needle) {
  return haystack.indexOf(needle)
}

// 暴力解法
var strStr = function (haystack, needle) {
  for(let i = 0; i < haystack.length; i++) {
    let flag = true
    for(let j = 0; j < needle.length; j++) {
      if(haystack[i + j] !== needle[j]) {
        flag = false
        break
      }
    }
    if(flag) {
      return i
    }
  }
  return -1
}

haystack = "aaa", needle = "aaaa"

console.log(strStr(haystack, needle))