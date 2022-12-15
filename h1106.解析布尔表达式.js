/*
 * @lc app=leetcode.cn id=1106 lang=javascript
 *
 * [1106] 解析布尔表达式
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
	let stack = []
	for (let i = 0; i < expression.length; i++) {
		if (expression[i] !== ',' && expression[i] !== ')') {
			if (expression[i] === 't') {
				stack.push(true)
			} else if (expression[i] === 'f') {
				stack.push(false)
			} else {
				stack.push(expression[i])
			}
		}
		if (expression[i] === ')') {
			let ans = ''
			let arr = []
			while (stack[stack.length - 1] !== '(') {
				arr.push(stack.pop())
			}
			stack.pop()
			let fuhao = stack.pop()
			if (fuhao === '!') {
				ans = !arr[0]
			} else if (fuhao === '|'){
				ans = arr.reduce((flag, item) => {
          return flag | item
        })
			} else if (fuhao === '&'){
				ans = arr.reduce((flag, item) => {
          return flag & item
        })
			}
			stack.push(Boolean(ans))
		}
	}
	return stack[0]
}
expression = "!(f)"
console.log(parseBoolExpr(expression))
// @lc code=end
