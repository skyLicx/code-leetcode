/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
	nums.sort((a, b) => a - b)
	let ans = []
	let mid = Math.ceil(nums.length / 2)
	for (let i = 0; i < parseInt(nums.length / 2); i++) {
    if(nums[i] === ans[ans.length - 1]) {
      ans.unshift(nums[mid + i])
      ans.unshift(nums[i])
    } else {
      ans.push(nums[i])
      ans.push(nums[mid + i])
    }
	}
  if(nums.length % 2 !== 0) {
    ans.push(nums[parseInt(nums.length / 2)])
  }
	for (let j = 0; j < ans.length; j++) {
		nums[j] = ans[j]
	}
	return nums
}

nums = [1,4,3,4,1,2,1,3,1,3,2,3,3]
console.log(wiggleSort(nums))
