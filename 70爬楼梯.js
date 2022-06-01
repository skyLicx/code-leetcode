/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
	if (n === 1) {
		return 1
	}
	let memo = new Array(n + 1).fill(0)
	let dp = []
	dp[1] = 1
	dp[2] = 2
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 1] + dp[i - 2]
	}
	return dp[n]
}

// 优化
var climbStairs = function (n) {
	if (n === 1) {
		return 1
	}
	let first = 1
	let second = 2
	for (let i = 3; i <= n; i++) {
    const temp = first + second
    first = second
    second = temp
	}
	return second
}

const n = 3
console.log(climbStairs(3))
