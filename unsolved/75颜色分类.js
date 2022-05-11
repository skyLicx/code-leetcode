/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 单指针
var sortColors = function (nums) {
	let ptr = 0
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === 0) {
			const temp = nums[ptr]
			nums[ptr] = nums[i]
			nums[i] = temp
			ptr++
		}
	}
	for (let i = ptr; i < nums.length; i++) {
		if (nums[i] === 1) {
			const temp = nums[ptr]
			nums[ptr] = nums[i]
			nums[i] = temp
			ptr++
		}
	}
}

// 双指针
var sortColors = function (nums) {
	let p0 = 0
  let p1= 0
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === 1) {
      const temp = nums[p1]
      nums[p1] = nums[i]
      nums[i] = temp
      p1++
    }
    if(nums[i] === 0) {
      const temp = nums[p0]
      nums[p0] = nums[i]
      nums[i] = temp
      if(p0 < p1) {
        const temp = nums[p1]
        nums[p1] = nums[i]
        nums[i] = temp
      }
      p0++
      p1++
    }
  }
}
// 双指针
var sortColors = function (nums) {
	let p0 = 0
  let p2= nums.length - 1
  for(let i = 0; i < nums.length; i++) {
    while(i < p2 && nums[i] === 2) {
      const temp = nums[p2]
      nums[p2] = nums[i]
      nums[i] = temp
      p2--
    }
    if(nums[i] === 0) {
      const temp = nums[p0]
      nums[p0] = nums[i]
      nums[i] = temp
      p0++
    }
  }
  return nums
}

nums = [2, 0, 1]

console.log(sortColors(nums))
