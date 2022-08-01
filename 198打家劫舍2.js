/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length
	if(n === 1) {
    return nums[0]
  }
	if(n === 2) {
    return Math.max(nums[0], nums[1])
  }
  let ans1 = robRange(nums, 0, n - 2)
  let ans2 = robRange(nums, 1, n - 1)
	return Math.max(ans1, ans2)
}
const robRange = (nums, start, end) => {
	let pre = nums[0 + start]
	let cur = Math.max(nums[0 + start], nums[1 + start])
	for (let i = start + 2; i <= end; i++) {
		let next = Math.max(pre + nums[i], cur)
		pre = cur
		cur = next
	}
  return cur
}

nums = [2,1,1,2]
console.log(rob(nums))
