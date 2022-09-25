/*
 * @lc app=leetcode.cn id=1636 lang=javascript
 *
 * [1636] 按照频率将数组升序排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
  let iMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const count = iMap.get(nums[i])
    iMap.set(nums[i], (count || 0) + 1)
  }
  let arr = Array.from(iMap)
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0]
    }
    return a[1] - b[1]
  })
  let ans = []
  for (let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i][1]; j++) {
      ans.push(arr[i][0])
    }
  }
  return ans
};
nums = [-1,1,-6,4,5,-6,1,4,1]
console.log(frequencySort(nums))
// @lc code=end

