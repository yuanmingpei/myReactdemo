const arr = [1, false, 'haha']
arr.push(true)
const user = {
  name: 'zhangsan',
  age: 18,
  lession: [{ title: 'ts' }, { title: 'css' }]
}
user.lession.push({ 'title': '1' })

let arr1: string[] = ['aa']
let user1: {
  name: string,
  age: number
}
user1.age = 20
let hd: (string | number | object)[]
hd = [1, 2, 'aa', {}]