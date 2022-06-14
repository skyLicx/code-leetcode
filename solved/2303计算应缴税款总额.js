/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function (brackets, income) {
	let sum = 0
	let pre = 0
	for (let [k, v] of brackets) {
		if (k > income) {
			sum += ((income - pre) * v) / 100
			break
		} else {
			sum += ((k - pre) * v) / 100
		}
		pre = k
	}
	return sum
}

;(brackets = [
	[1, 0],
	[4, 25],
	[5, 50],
]),
	(income = 2)
console.log(calculateTax(brackets, income))
