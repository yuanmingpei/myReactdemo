import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'

function HookDemo (props) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('useEffect执行~', this)
    document.title = `You clicked ${count} times`

    return () => {

    }
  })

  const [name, setName] = useState('张三')
  useEffect(() => {
    console.log('111')
    return () => {

    }
  }, [name])



  return (
    <>
      <div>数字显示为：{count}</div>
      <button onClick={() => { setCount(count + 1) }}>点我+1</button>
      <div>我的名字是：{name}</div>
      <button onClick={() => {
        setName('李四')
      }}>换名字点我</button>
    </>
  )
}

// HookDemo.propTypes = {}

export default HookDemo
