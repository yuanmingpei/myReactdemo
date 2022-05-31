type userTpye = {
  name: string,
  age: number,
  sex?: string | number
}
type addUserFunc = (user: userTpye) => boolean
let addUser: addUserFunc = (user: userTpye): boolean => {
  console.log(111)
  return true
}

console.log(addUser({ name: 'a', age: 1 }))