/**
 * @description 选择排序
 * @param {Array<Number>} arr 
 */
function selectSort(arr) {
  const n = arr.length
  for (let i = 0; i < n - 1; i++) {
    for (j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}

const arr = [2, 5, 6, 4, 1, 3]
console.log(selectSort(arr))