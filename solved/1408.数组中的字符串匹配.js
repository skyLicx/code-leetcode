/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
	words.sort((a, b) => a.length - b.length)
	let ans = []
	for (let i = 0; i < words.length; i++) {
		let j = i + 1
		while (j < words.length) {
			if (words[j].indexOf(words[i]) > -1) {
				ans.push(words[i])
				break
			}
			j++
		}
	}
	return ans
}

words = ["blue","green","bu"]
console.log(stringMatching(words))
