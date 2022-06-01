function letterCombinations(digits) {
  const keyMap = new Map([
    ['2', 'abc'],
    ['3', 'def'],
    ['4', 'ghi'],
    ['5', 'jkl'],
    ['6', 'mno'],
    ['7', 'pqrs'],
    ['8', 'tuv'],
    ['9', 'wxyz']
  ])
  let wordArr = []
  for(let key of digits) {
    wordArr.push(keyMap.get(key))
  }
  let res = new Array(wordArr[0].length).fill('')
  for(let i = 0; i < wordArr.length; i++) {
    let wordStr = wordArr[i]
    let iset = new Set()
    for(let m = 0; m < res.length; m++) {
      for(let j = 0; j < wordStr.length; j++) {
        const str = res[m] + wordStr[j]
        iset.add(str)
      }
    }
    res = Array.from(iset)
  }
  return res
};

digits = "23"
console.log(letterCombinations(digits))