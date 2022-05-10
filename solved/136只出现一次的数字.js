/**
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/single-number
 */

// 方式一 set
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let iSet = new Set()
	for (let key of nums) {
		if (iSet.has(key)) {
			iSet.delete(key)
		} else {
			iSet.add(key)
		}
	}
	return [...iSet][0]
}

// 方式二 异或
var singleNumber = function(nums) {
  let single = 0
  for(let key of nums) {
    single ^= key
  }
  return single
};
