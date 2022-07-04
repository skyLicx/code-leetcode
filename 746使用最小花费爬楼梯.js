/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
	let n = cost.length
  let p = new Array(n + 1)
  p[0] = p[1] = 0
  for(let i = 2; i <= cost.length; i++) {
    p[i] = Math.min(p[i - 1] + cost[i - 1], p[i - 2] + cost[i - 2])
  }
  return p[n]
}

// 优化
var minCostClimbingStairs = function (cost) {
	let prev = 0, curr = 0;
  for(let i = 2; i <= cost.length; i++) {
    const next = Math.min(curr + cost[i - 1], prev + cost[i - 2])
    prev = curr
    curr = next
  }
  return curr
}

cost = [2,1]
console.log(minCostClimbingStairs(cost))
