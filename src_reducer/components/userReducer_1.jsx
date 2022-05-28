import React, { useReducer } from 'react'
const reducer = (prevState, action) => {
  console.log(prevState, action)
  let newState = { ...prevState }
  // console.log(newState)
  switch (action.type) {
    case 'minus':
      newState.count--
      return newState
    case 'add':
      newState.count++
      return newState
    default:
      return prevState
  }
}
const intalState = {
  count: 0
}
export default function UserReducer_1 () {
  const [state, dispatch] = useReducer(reducer, intalState)
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: 'minus'
        })
      }}>-</button>
      {state.count}
      <button onClick={() => {
        dispatch({
          type: 'add'
        })
      }}>+</button>
    </div>
  )
}
