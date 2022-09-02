/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
	let dummy = new ListNode(0, head)
  let cur = dummy
	while (cur.next && cur.next.next) {
    const p1 = cur.next
    const p2 = cur.next.next
    p1.next = p2.next
    p2.next = p1
    cur.next = p2
    cur = p1
	}
	return dummy.next
}
// @lc code=end
