/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 哈希表
var detectCycle = function (head) {
  let iset = new Set()
  while(head) {
    if (iset.has(head)) {
      return head
    }
    iset.add(head)
    head = head.next
  }
  return null
}
/* var detectCycle = function (head) {
	if (!head || !head.next) return null
	let slow = head.next
	let fast = head.next.next
	while (fast && fast.next) {
		slow = slow.next
		fast = fast.next.next
		if (slow === fast) {
			slow = head
			while (fast !== slow) {
				slow = slow.next
				fast = fast.next
			}
			return slow
		}
	}
	return null
} */
// @lc code=end
