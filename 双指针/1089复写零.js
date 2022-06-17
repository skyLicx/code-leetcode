/**
给你一个长度固定的整数数组 arr，请你将该数组中出现的每个零都复写一遍，并将其余的元素向右平移。

注意：请不要在超过该数组长度的位置写入元素。

要求：请对输入的数组 就地 进行上述修改，不要从函数返回任何东西。

示例 1：

输入：[1,0,2,3,0,4,5,0]
输出：null
解释：调用函数后，输入的数组将被修改为：[1,0,0,2,3,0,0,4]
示例 2：

输入：[1,2,3]
输出：null
解释：调用函数后，输入的数组将被修改为：[1,2,3]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/duplicate-zeros
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let n = arr.length
  for(let i = 0; i < n; i++) {
    if(arr[i] === 0) {
      arr.splice(i, 0, 0)
      i++
    }
  }
  arr.splice(n, arr.length)
  return arr
}
// 双指针
var duplicateZeros = function (arr) {
  const n = arr.length
  let top = 0
  let i = -1
  while(top < n) {
    i++
    if(arr[i] !== 0) {
      top++
    } else {
      top += 2
    }
  }
  let j = n - 1
  if(top === n + 1) {
    arr[j] = 0
    j--
    i--
  }
  while(i >= 0) {
    arr[j] = arr[i]
    if(arr[i] === 0) {
      arr[j - 1] = 0
      j -= 2
    } else {
      j--
    }
    i--
  }
  return arr
}

arr = [8,4,5,0,0,0,0,7]
console.log(duplicateZeros(arr))
