/**
 * @param {string[]} strs
 * @return {number}
 */
var findLUSlength = function (strs) {
	let maxLength = -1
	for (let i = 0; i < strs.length; i++) {
		let check = true
		for (let j = 0; j < strs.length; j++) {
			if (i != j && isSubseq(strs[i], strs[j])) {
				check = false
				break
			}
		}
		if (check) {
			maxLength = Math.max(maxLength, strs[i].length)
		}
	}
	return maxLength
}

const isSubseq = (s, t) => {
	let p1 = 0
	let p2 = 0
	while (p1 < s.length && p2 < t.length) {
		if (s[p1] === t[p2]) {
			p1++
		}
		p2++
	}
	if (p1 === s.length) {
		return true
	}
	return false
}

strs = ['aaa', 'aaa', 'aa']
console.log(findLUSlength(strs))
