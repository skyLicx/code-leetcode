/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

class LinkNode {
	constructor(val, next = null) {
		this.val = val
		this.next = next
	}
}

var MyLinkedList = function () {
	// 头节点
	this._head = null
	// 尾节点
	this._tail = null
	// 长度
	this._size = 0
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function (index) {
	if (index < 0 || index >= this._size) {
		return null
	}
	let dummy = new LinkNode(0, this._head)
	while (index > 0) {
		dummy = dummy.next
		index--
	}
	return dummy.next
}

MyLinkedList.prototype.get = function (index) {
	if (index < 0 || index >= this._size) {
		return -1
	}
	return this.getNode(index).val
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
	this._size++
	// 新的头节点
	let node = new LinkNode(val)
	// 新的头节点next指向旧的头节点
	node.next = this._head
	// 将旧的头节点替换为新的头节点
	this._head = node
	// 如果尾节点为null 则尾节点等于头节点
	if (!this._tail) {
		this._tail = node
	}
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
	this._size++
	// 新的尾节点
	const node = new LinkNode(val)
	if (this._tail) {
		this._tail.next = node
		this._tail = node
		return
	}
	this._head = node
	this._tail = node
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
	// 如果 index 大于链表长度，则不会插入节点
	if (index > this._size) return
	// 如果index小于0，则在头部插入节点
	if (index <= 0) {
		this.addAtHead(val)
		return
	}
	// 如果 index 等于链表的长度，则该节点将附加到链表的末尾
	if (index === this._size) {
		this.addAtTail(val)
		return
	}
	// 获取目标节点的上一个的节点
  const node = this.getNode(index - 1)
	node.next = new LinkNode(val, node.next)
  this._size++
}

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
	if (index < 0 || index >= this._size) return
	if (index === 0) {
		this._head = this._head.next
		this._size--
		return
	}
	// 获取目标节点的上一个的节点
	const node = this.getNode(index - 1)
	node.next = node.next.next
	// 处理尾节点
	if (index === this._size - 1) {
		this._tail = node
	}
	this._size--
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// var linkedList = new MyLinkedList()
// linkedList.addAtHead(1)
// linkedList.addAtTail(3)
// linkedList.addAtIndex(1, 2) //链表变为1-> 2-> 3
// linkedList.get(1) //返回2
// linkedList.deleteAtIndex(1) //现在链表是1-> 3
// linkedList.get(1) //返回3
// @lc code=end
