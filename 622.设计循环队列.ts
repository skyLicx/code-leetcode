class MyCircularQueue {
  queue: number[]
  maxSize: number
  font: number
  rear: number
  constructor(k: number) {
    this.maxSize = k + 1
    this.queue = new Array(this.maxSize).fill(0)
    this.font = 0
    this.rear = 0
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false
    } else {
      this.queue[this.rear] = value
      this.rear = (this.rear + 1) % this.maxSize
      return true
    }
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false
    } else {
      this.font = (this.font + 1) % this.maxSize
      return true
    }
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1
    } else {
      return this.queue[this.font]
    }
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1
    } else {
      console.log((this.rear - 1) % this.maxSize, 'xxx')
      return this.queue[(this.rear - 1) % this.maxSize]
    }
  }

  isEmpty(): boolean {
    return this.font === this.rear
  }

  isFull(): boolean {
    return (this.rear + 1) % this.maxSize === this.font
  }
}

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/
var circularQueue = new MyCircularQueue(3) // 设置长度为 3
console.log(circularQueue.enQueue(1))  // 返回 true
console.log(circularQueue.enQueue(2))  // 返回 true
console.log(circularQueue.enQueue(3))  // 返回 true
console.log(circularQueue.enQueue(4))  // 返回 false，队列已满
console.log(circularQueue.Rear())  // 返回 3
console.log(circularQueue.isFull())  // 返回 true
console.log(circularQueue.deQueue())  // 返回 true
console.log(circularQueue.enQueue(4))  // 返回 true
console.log(circularQueue.Rear())  // 返回 4