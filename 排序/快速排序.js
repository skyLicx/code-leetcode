/**
 * @description 快速排序
 * @param {Array<Number>} arr
 * @returns {Array<Number>}
 */

function quickSort(arr) {
  if (arr.length <= 1) return arr
  let leftArr = []
  let rightArr = []
  // 以第一位作为基准
  const num = arr[0]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < num) { // 小于基准的排左边
      leftArr.push(arr[i])
    } else { // 大于基准的排右边
      rightArr.push(arr[i])
    }
  }
  return quickSort(leftArr).concat(num, quickSort(rightArr))
}

const arr = [2, 5, 6, 4, 1, 3]
console.log(quickSort(arr))