/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	const step = needle.length
	for (let i = 0; i <= haystack.length - step; i++) {
    const str = haystack.substring(i, i + step)
    if (str === needle) {
      return i
    }
  }
  return -1
}

;(haystack = "mississippi"), (needle = 'issi')
console.log(strStr(haystack, needle))
