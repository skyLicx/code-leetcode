/**
 * @description 冒泡排序
 * @param {Array<Number>} arr 
 */
function bubbleSort(arr) {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

const arr = [2, 5, 6, 4, 1, 3]
console.log(bubbleSort(arr))