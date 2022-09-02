/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
/* var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0, head)
  let pre = dummy
  let len = 0
  while(pre.next) {
    pre = pre.next
    len++
  }
  cur = dummy
  let count = len - n
  while(count) {
    cur = cur.next
    count--
  }
  cur.next = cur.next.next
  return dummy.next
}; */

// 快慢指针
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode(0, head)
  let slow = dummy
  let fast = dummy
  while(n--) {
    fast = fast.next
  }
  while(fast.next != null) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return dummy.next
}
// @lc code=end

