/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
	let candys = new Array(ratings.length).fill(1)

  // 当前数据大于左侧 则当前糖果为左侧糖果 + 1
	for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candys[i] = candys[i - 1] + 1
    }
  }
  // 当前数据大于右侧
	for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      // 取最大值才能保证即大于左侧又大于右侧
      candys[i] = Math.max(candys[i + 1] + 1, candys[i])
    }
  }

  let count = candys.reduce((a, b) => {
    return a + b
  })
  
	return count
}

// @lc code=end
