let hd: string = 'aa'

let name1: unknown = 'aa'
let name2: string = name1 as string
let age1: string = '99'
let age2: number = age1 as unknown as number

function show(): void {
}
console.log(show())

let name3: void = undefined

function fd(): never {
  throw new Error('111')
}

let name4: string = 'hehe'
name4 = 'hha'

let fu: Function = function (a: number, b: number, c = 'aaa') {
  return a + b + c
}
fu(1, 2, 4)
let fu2: Function
fu2 = function () {

}

