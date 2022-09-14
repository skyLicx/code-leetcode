/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start

var MyStack = function() {
  this.arr = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.arr.push(x)
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  const key = this.arr.pop()
  return key
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.arr[this.arr.length - 1]
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.arr.length ? false : true
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

