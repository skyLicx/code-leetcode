/*
 * @lc app=leetcode.cn id=1475 lang=javascript
 *
 * [1475] 商品折扣后的最终价格
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number[]}
 */
// 直接遍历
/* var finalPrices = function (prices) {
	for (let i = 0; i < prices.length; i++) {
		for (let j = i + 1; j < prices.length; j++) {
			if (prices[j] <= prices[i]) {
				prices[i] = prices[i] - prices[j]
				break
			}
		}
	}
	return prices
} */

// 单调栈
var finalPrices = function (prices) {
  let n = prices.length
  let stack = []
  let ans = prices
  for (let i = 0; i < n; i++) {
    while(stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
      let topIndex = stack.pop()
      ans[topIndex] = prices[topIndex] - prices[i]
    }
    stack.push(i)
  }
  return ans
}
prices = [10, 1, 1, 6]
console.log(finalPrices(prices))
// @lc code=end
