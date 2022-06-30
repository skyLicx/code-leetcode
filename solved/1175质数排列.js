/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
	const MOD = 1000000007
	let count = 0
	for (let i = 1; i <= n; i++) {
		if (isPrime(i)) {
			count++
		}
	}
	m = n - count
  let res = 1
	while (count > 0) {
		res = res % MOD
		res *= count
		count--
	}
	while (m > 0) {
		res = res % MOD
		res *= m
		m--
	}
	return res
}

const isPrime = (n) => {
	if (n === 1) {
		return false
	}
	for (let i = 2; i * i <= n; i++) {
		if (n % i === 0) {
			return false
		}
	}
	return true
}

console.log(numPrimeArrangements(100))
