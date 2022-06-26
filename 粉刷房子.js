/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function (costs) {
  let dp = new Array(3)
  for(let j = 0; j < costs[0].length; j++) {
    dp[j] = costs[0][j]
  }
  for(let i = 1; i < costs.length; i++) {
    let dpNew = new Array(3)
    dpNew[0] = Math.min(dp[1], dp[2]) + costs[i][0]
    dpNew[1] =  Math.min(dp[0], dp[2]) + costs[i][1]
    dpNew[2] = Math.min(dp[0], dp[1]) + costs[i][2]
    dp = dpNew
  }
  return Math.min(...dp)
}

costs = [[17,2,17],[16,16,5],[99,95,3]]

console.log(minCost(costs))