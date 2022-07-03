/*
 * @Author: Licx
 * @Date: 2022-07-03 15:34:08
 * @LastEditors: Licx
 * @LastEditTime: 2022-07-03 15:34:26
 */

/**
泰波那契序列 Tn 定义如下： 

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

示例 1：

输入：n = 4
输出：4
解释：
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
示例 2：

输入：n = 25
输出：1389537

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/n-th-tribonacci-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
	if (n === 0) return 0
	if (n === 1) return 1
	if (n === 2) return 1
	let p = 0,
		q = 0,
		l = 1,
		r = 1
	for (let i = 3; i <= n; i++) {
		p = q
		q = l
		l = r
		r = p + q + l
	}
	return r
}
