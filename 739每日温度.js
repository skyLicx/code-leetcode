/**
给定一个整数数组 temperatures ，表示每天的温度，返回一个数组 answer ，其中 answer[i] 是指在第 i 天之后，才会有更高的温度。如果气温在这之后都不会升高，请在该位置用 0 来代替。

示例 1:

输入: temperatures = [73,74,75,71,69,72,76,73]
输出: [1,1,4,2,1,1,0,0]
示例 2:

输入: temperatures = [30,40,50,60]
输出: [1,1,1,0]
示例 3:

输入: temperatures = [30,60,90]
输出: [1,1,0]

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/daily-temperatures

 */

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let arr = []
  let cur = 0
  let right = 1
  while(cur < temperatures.length) {
    if(temperatures[cur] < temperatures[right]) {
      arr.push(right - cur)
      cur++
      right = cur + 1
      continue
    }
    if(right++ >= temperatures.length) {
      arr.push(0)
      cur++
      right = cur + 1
    }
  }
  return arr
}

// 单调栈
var dailyTemperatures = function (temperatures) {
  let stack = []
  let len = temperatures.length
  let arr = new Array(len).fill(0)
  for(let i = 0; i < len; i++) {
    while(stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
      const topIndex = stack.pop()
      arr[topIndex] = i - topIndex
    }
    stack.push(i)
  }
  return arr
}

temperatures = [73,74,75,71,69,72,76,73]
console.log(dailyTemperatures(temperatures))
