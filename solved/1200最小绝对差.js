/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
	arr.sort((a, b) => a - b)
	let min = Infinity
  let ans = []
	for (let i = 0; i < arr.length - 1; i++) {
		const cur = arr[i + 1] - arr[i]
		if(cur < min) {
      min = cur
      ans = []
      ans.push([arr[i], arr[i + 1]])
    } else if (cur === min) {
      ans.push([arr[i], arr[i + 1]])
    }
	}
  return ans
}

arr = [3,8,-10,23,19,-4,-14,27]
console.log(minimumAbsDifference(arr))
