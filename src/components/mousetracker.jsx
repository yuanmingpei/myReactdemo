import React, { Component } from 'react'

export default class MouseTracker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ishot: true,
      userName: '',
      passWord: ''
    }
    this.change = this.change.bind(this)
  }
  static defaultProps = {}
  run = () => {
    console.log('run', this)
  }
  state = { ishot: true }
  change () {
    console.log(this)
  }
  savePassword = (e) => {
    this.setState({
      passWord: e.target.value
    })
  }
  saveUserName = (e) => {
    this.setState({
      userName: e.target.value
    })
  }
  saveData = (param, e) => {
    return (e) => {
      console.log(param, e);
      this.setState({
        [param]: e.target.value
      })
    }
  }
  submit = () => {
    console.log(this.state)
  }
  render () {
    return (
      <>
        <div onClick={this.change}>mousetracker</div>
        用户名：<input type="text" onChange={this.saveData('userName')} ref={(e, a) => { }} /><br />
        密码：<input type="text" onChange={this.saveData} /><br />
        <button onClick={this.submit}>提交</button>
      </>
    )
  }
}
