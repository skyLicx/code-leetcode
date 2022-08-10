/*
 * @lc app=leetcode.cn id=640 lang=javascript
 *
 * [640] 求解方程
 */

// @lc code=start
/**
 * @param {string} equation
 * @return {string}
 */
var solveEquation = function(equation) {
  let left = ''
  let right = ''
  let arr = equation.split('=')
  left = arr[0]
  right = arr[1]
  let leftArr = []
  let rightArr = []
  let str = ''
  for(let i = 0; i < left.length; i++) {
    if(left[i] === '+' || left[i] === '-') {
      if(str !== '') {
        leftArr.push(str)
      }
      str = left[i] 
    } else {
      str += left[i]
    }
  }
  if(str !== '') {
    leftArr.push(str)
  }
  str = ''
  for(let i = 0; i < right.length; i++) {
    if(right[i] === '+' || right[i] === '-') {
      if(str !== '') {
        rightArr.push(str)
      }
      str = right[i] 
    } else {
      str += right[i]
    }
  }
  if(str !== '') {
    rightArr.push(str)
  }
  let leftX = 0
  let leftSum = 0
  for(let i = 0; i < leftArr.length; i++) {
    if (leftArr[i].indexOf('x') > -1) {
      if (leftArr[i][0] === '0') break
      leftX += parseInt(leftArr[i]) ? parseInt(leftArr[i]) :(leftArr[i].indexOf('-') > -1 ? -1 : 1)
    } else {
      leftSum += parseInt(leftArr[i])
    }
  }
  let rightX = 0
  let rightSum = 0
  for(let i = 0; i < rightArr.length; i++) {
    if (rightArr[i].indexOf('x') > -1) {
      if (rightArr[i][0] === '0') break
      rightX += parseInt(rightArr[i]) ? parseInt(rightArr[i]) : (rightArr[i].indexOf('-') > -1 ? -1 : 1)
    } else {
      rightSum += parseInt(rightArr[i])
    }
  }
  if(leftX === rightX) {
    if(leftSum !== rightSum) {
      return 'No solution'
    } else {
      return 'Infinite solutions'
    }
  }
  return 'x=' + (rightSum - leftSum) / (leftX - rightX)
};
console.log(solveEquation("x+5-3+x=6+x-2"))
// @lc code=end

