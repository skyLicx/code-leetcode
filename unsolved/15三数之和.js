/**
给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

注意：答案中不可以包含重复的三元组。

示例 1：

输入：nums = [-1,0,1,2,-1,-4]
输出：[[-1,-1,2],[-1,0,1]]
示例 2：

输入：nums = []
输出：[]
示例 3：

输入：nums = [0]
输出：[]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/3sum
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = []
  const len = nums.length
  if(len < 3) {
    return res
  }
  // 从小到大排序
  nums.sort((a, b) => a - b)
  // 如果 最小值大于0 || 最大值小于0 则不满足条件
  if(nums[0] > 0 || nums[len - 1] < 0) {
    return res
  }
  for(let i = 0; i < len; i++) {
    // 如果当前值大于 0，和右侧的值再怎么加也不会等于 0，所以直接退出
    if(nums[i] > 0) {
      break
    }
    if(nums[i] === nums[i - 1]) {
      continue
    }
    let l = i + 1
    let r = len - 1
    while(l < r) {
      const temp = nums[i] + nums[l] + nums[r]
      if(temp < 0) {
        l++
      }
      if(temp > 0) {
        r--
      }
      if(temp === 0) {
        res.push([nums[i], nums[l], nums[r]])
        // 跳过重复值
        while(l < r && nums[l] === nums[l + 1]) {
          l++
        }
        while(l < r && nums[r] === nums[r - 1]) {
          r--
        }
        l++
        r--
      }
    }
  }
  return res
}


nums = [1, -1, -1, 0]

console.log(threeSum(nums))