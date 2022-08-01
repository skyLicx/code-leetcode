class MyCalendar {
  constructor() {
    this.books = []
  }

  book(start, end) {
    for(let arr of this.books) {
      let l = arr[0], r = arr[1]
      if(l < end && start < r) {
        return false
      }
    }
    this.books.push([start, end])
    return true
  }
}

let aa = new MyCalendar()
console.log(aa.book(10, 20))

