/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	let n = nums.length
  let pre = nums[0]
  let cur = Math.max(nums[1] || 0, nums[0])
	for (let i = 2; i < n; i++) {
    let next = Math.max(pre + nums[i], cur)
		pre = cur
    cur = next
	}
	return cur
}

nums = [2]
console.log(rob(nums))
