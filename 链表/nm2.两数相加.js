/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	// 首节点
	let head = null
	// 尾节点
	let tail = null
	// 进位
	let carry = 0

	while (l1 || l2) {
		const a1 = l1 ? l1.val : 0
		const a2 = l2 ? l2.val : 0
		const sum = a1 + a2 + carry
		// 节点val
		const nodeVal = sum % 10
    carry = parseInt(sum / 10)
		if (!head) {
			head = tail = new ListNode(nodeVal)
		} else {
			tail.next = new ListNode(nodeVal)
			tail = tail.next
		}
		if (l1) {
			l1 = l1.next
		}
		if (l2) {
			l2 = l2.next
		}
	}
  // 如果还有进位 则在尾节点加上
  if (carry) {
    tail.next = new ListNode(carry)
  }
  return head
}
// @lc code=end
