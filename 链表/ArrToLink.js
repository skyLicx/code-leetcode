class LinkNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

const generateLinklist = (arr) => {
  const head = new LinkNode(arr[0])
  let cur = head
  for(let i = 1; i < arr.length; i++) {
    const node = new LinkNode(arr[i])
    cur.next = node
    cur = cur.next
  }
  return head
}

exports.generateLinklist = generateLinklist
