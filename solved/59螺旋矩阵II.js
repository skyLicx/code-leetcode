/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
	let arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
	let count = 1
	let right = 0 // 距离右边
	let down = 0 // 距离底部
	let lim = [0, n - 1] // 边界值
	for (let i = 0; i < n * n; i++) {
		arr[down][right] = count
		count++
		// 如果down距离顶部为最小边界值加1 且 right距离为0 则说明已经走完一圈
		if (down === lim[0] + 1 && right === lim[0]) {
			lim[0] += 1 // 最小边界加1
			lim[1] -= 1 // 最大边界减1
		}
		// 如果已经到最左边且不是最顶部 则down上移
		if (right === lim[0] && down > lim[0]) {
			down--
			continue
		}
		// 如果已经到最右边且是最底部 则down下移
		if (right === lim[1] && down < lim[1]) {
			down++
			continue
		}
		// 如果为最底部 （最后一圈的时候 最顶部也可能是最底部 所以right根据情况右移或左移）
		if (down === lim[1]) {
			if (right > lim[0]) {
				right--
			} else {
				right++
			}
		}
		// 如果不是最右边 且 不是最底部 则right右移 （要放在最后一步 否则最左边down上移的时候会造成错误）
		if (right < lim[1] && down < lim[1]) {
			right++
		}
	}
	return arr
}

// 模拟优化
var generateMatrix = function (n) {
	let arr = new Array(n).fill(0).map(() => new Array(n).fill(0))
	let top = 0
	let bottom = n - 1
	let left = 0
	let right = n - 1
  let k = 1
	while (k <= n * n) {
		for (let i = left; i <= right; i++) {
      arr[top][i] = k++
    }
		top++
		for (let i = top; i <= bottom; i++) {
      arr[i][right] = k++
    }
		right--
		for (let i = right; i >= left; i--) {
      arr[bottom][i] = k++
    }
		bottom--
		for (let i = bottom; i >= top; i--) {
      arr[i][left] = k++
    }
		left++
	}
  return arr
}

n = 5
console.log(generateMatrix(n))
