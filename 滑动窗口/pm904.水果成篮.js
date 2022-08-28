/*
 * @lc app=leetcode.cn id=904 lang=javascript
 *
 * [904] 水果成篮
 */

// @lc code=start
/**
 * @param {number[]} fruits
 * @return {number}
 */
/* var totalFruit = function (fruits) {
	let map = new Map()
	let start = 0
	let end = 0
	let max = 0
	while (end < fruits.length) {
		// 当前水果种类个数
		const curfruitCount = map.get(fruits[end])
		// 当前水果种类个数加上1
		map.set(fruits[end], (curfruitCount || 0) + 1)
		// 如果水果种类大于2 则将start不断后移 删除start对应的水果种类个数
		while (map.size > 2) {
			// start对应的水果种类个数减去1
			const count = map.get(fruits[start]) - 1
			// 如果为0 删掉此水果种类
			if (count === 0) {
				map.delete(fruits[start])
			} else {
				map.set(fruits[start], count)
			}
			start++
		}
		max = Math.max(max, end - start + 1)
		end++
	}
	return max
} */
var totalFruit = function (fruits) {
	let map = new Map()
	let start = 0
	let end = 0
	let max = 0
	while (end < fruits.length) {
		map.set(fruits[end], end)
		if (map.size > 2) {
      let minIndex = fruits.length - 1
			map.forEach(item => {
        minIndex = Math.min(minIndex, item)
      })
      map.delete(fruits[minIndex])
			start = minIndex + 1
		}
		max = Math.max(max, end - start + 1)
		end++
	}
	return max
}
// @lc code=end
