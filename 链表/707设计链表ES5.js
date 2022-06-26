class LinkNode {
	constructor(val, next) {
		this.val = val
		this.next = next || null
	}
}

var MyLinkedList = function () {
	this._size = 0
	this._tail = null
	this._head = null
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.getNode = function (index) {
	if (index < 0 || index > this._size) {
		return null
	}
	// 虚拟头节点
	let dummy = new LinkNode(0, this._head)
	while (index > 0) {
		dummy = dummy.next
		index--
	}
	return dummy.next
}

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
	if (index < 0 || index >= this._size) return -1
	return this.getNode(index).val
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
	const node = new LinkNode(val, this._head)
	this._head = node
	this._size++
	if (!this._tail) {
		this._tail = node
	}
}

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
	const node = new LinkNode(val, null)
	this._size++
	if (this._tail) {
		this._tail.next = node
		this._tail = node
		return
	}
	this._tail = node
	this._head = node
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
	if (index > this._size) return
	if (index <= 0) {
		this.addAtHead(val)
		return
	}
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
let linkedList = new MyLinkedList()
linkedList.addAtHead(1)
linkedList.addAtTail(3)
linkedList.addAtIndex(1, 2) //链表变为1-> 2-> 3
linkedList.get(1) //返回2
console.log(linkedList.get(1))
linkedList.deleteAtIndex(1) //现在链表是1-> 3
linkedList.get(1) //返回3
console.log(linkedList.get(1))
