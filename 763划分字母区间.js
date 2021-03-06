/**
字符串 S 由小写字母组成。我们要把这个字符串划分为尽可能多的片段，同一字母最多出现在一个片段中。返回一个表示每个字符串片段的长度的列表。

示例：

输入：S = "ababcbacadefegdehijhklij"
输出：[9,7,8]
解释：
划分结果为 "ababcbaca", "defegde", "hijhklij"。
每个字母最多出现在一个片段中。
像 "ababcbacadefegde", "hijhklij" 的划分是错误的，因为划分的片段数较少。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/partition-labels
 */
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let last = []
  for(let i = 0; i < s.length; i++) {
    last[s[i]] = i
  }
  let start = 0
  let end = 0
  let arr = []
  for(let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s[i]])
    if(i === end) {
      arr.push(end - start + 1)
      start = end + 1
    }
  }
  return arr
}

S = "vhaagbqkaq"

console.log(partitionLabels(S))
