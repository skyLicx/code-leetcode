class MyHashMap {
  res: Array<number[]> = []
  constructor() {
  }

  put(key: number, value: number): void {
    this.res.push([key, value])
  }

  get(key: number): number {
    let cur = -1
    this.res.map(item => {
      if(item[0] === key) {
        cur = item[1]
      }
    })
    return cur
  }

  remove(key: number): void {
    for(let i = 0; i < this.res.length; i++) {
      if(this.res[i][0] === key) {
        this.res.splice(i, 1)
        i--
      }
    }
  }
}

/**
* Your MyHashMap object will be instantiated and called as such:
* var obj = new MyHashMap()
* obj.put(key,value)
* var param_2 = obj.get(key)
* obj.remove(key)
*/

let myHashMap = new MyHashMap();
myHashMap.put(1, 1); // myHashMap 现在为 [[1,1]]
myHashMap.put(2, 2); // myHashMap 现在为 [[1,1], [2,2]]
myHashMap.get(1);    // 返回 1 ，myHashMap 现在为 [[1,1], [2,2]]
myHashMap.get(3);    // 返回 -1（未找到），myHashMap 现在为 [[1,1], [2,2]]
myHashMap.put(2, 1); // myHashMap 现在为 [[1,1], [2,1]]（更新已有的值）
myHashMap.get(2);    // 返回 1 ，myHashMap 现在为 [[1,1], [2,1]]
myHashMap.remove(2); // 删除键为 2 的数据，myHashMap 现在为 [[1,1]]
// myHashMap.get(2);    // 返回 -1（未找到），myHashMap 现在为 [[1,1]]
console.log(myHashMap)