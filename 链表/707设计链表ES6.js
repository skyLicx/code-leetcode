class LinkNode {
	constructor(val, next = null) {
		this.val = val
		this.next = next
	}
}

class MyLinkedList {
	constructor() {
		// 头节点
		this.head = null
		// 尾节点
		this.tail = null
		// 长度
		this.size = 0
	}
	// 获取节点
	getNode(index) {
    if (index < 0 || index > this.size) {
      return null
    }
		// 创建虚拟节点
		let dummyNode = new LinkNode(0, this.head)
		while (index > 0) {
			dummyNode = dummyNode.next
			index--
		}
		return dummyNode.next
	}
	// 新增头节点
	addAtHead(val) {
		// 创建新节点 使新节点next指向当前的头节点
		const node = new LinkNode(val, this.head)
		this.head = node
		this.size++
		// 如果不存在尾节点
		if (!this.tail) {
			this.tail = node
		}
	}
	// 新增尾节点
	addAtTail(val) {
		// 创建新节点
		const node = new LinkNode(val)
		this.size++
    // 存在尾节点 则使尾节点的next指向新节点
		if (this.tail) {
			this.tail.next = node
			this.tail = node
			return
		}
		// 如果不存在尾节点
		this.tail = node
		this.head = node
	}
  // 获取节点值
	get(index) {
    if(index < 0 || index >= this.size) return -1
		return this.getNode(index).val
	}
  // 指定位置新增节点
  addAtIndex(index, val) {
    if(index > this.size) return
    if(index <= 0) {
      this.addAtHead(val)
      return
    }
    if(index === this.size) {
      this.addAtTail(val)
      return
    }
    // 获取前一个节点
    const node = this.getNode(index - 1)
    node.next = new LinkNode(val, node.next)
    this.size++
  }
  // 删除指定位置节点
  deleteAtIndex(index) {
    if(index < 0 || index >= this.size) return
    if(index === 0) {
      this.head = this.head.next
      this.size--
      return
    }
    const node = this.getNode(index - 1)
    node.next = node.next.next
    // 如果删的是尾节点
    if(index === this.size - 1) {
      this.tail = node
    }
    this.size--
  }
}

let linkedList = new MyLinkedList()
linkedList.addAtHead(1)
linkedList.addAtTail(3)
linkedList.addAtIndex(1, 2) //链表变为1-> 2-> 3
console.log(linkedList)
linkedList.get(1) //返回2
console.log(linkedList.get(1))
linkedList.deleteAtIndex(1) //现在链表是1-> 3
linkedList.get(1) //返回3
console.log(linkedList.get(1))