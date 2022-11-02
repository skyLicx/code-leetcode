/*
 * @lc app=leetcode.cn id=1620 lang=javascript
 *
 * [1620] 网络信号最好的坐标
 */

// @lc code=start
/**
 * @param {number[][]} towers
 * @param {number} radius
 * @return {number[]}
 */
var bestCoordinate = function (towers, radius) {
	let xMax = Number.MIN_VALUE,
		yMax = -Number.MAX_VALUE
	for (const tower of towers) {
		let x = tower[0],
			y = tower[1]
		xMax = Math.max(xMax, x)
		yMax = Math.max(yMax, y)
	}
	let cx = 0,
		cy = 0
	let maxQuality = 0
	for (let x = 0; x <= xMax; x++) {
		for (let y = 0; y <= yMax; y++) {
			const coordinate = [x, y]
			let quality = 0
			for (const tower of towers) {
				const squaredDistance = getSquaredDistance(coordinate, tower)
				if (squaredDistance <= radius * radius) {
					const distance = Math.sqrt(squaredDistance)
					quality += Math.floor(tower[2] / (1 + distance))
				}
			}
			if (quality > maxQuality) {
				cx = x
				cy = y
				maxQuality = quality
			}
		}
	}
	return [cx, cy]
}
const getSquaredDistance = (coordinate, tower) => {
	return (
		(tower[0] - coordinate[0]) * (tower[0] - coordinate[0]) +
		(tower[1] - coordinate[1]) * (tower[1] - coordinate[1])
	)
}
// @lc code=end
