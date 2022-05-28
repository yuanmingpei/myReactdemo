import React, { Component } from 'react'

export default class About extends Component {
  state = { num: 0 }
  componentDidMount () {
    setTimeout(() => {
      this.setState({
        num: this.state.num + 1
      })
      console.log(this.state.num);
    }, 0)
  }
  render () {
    return (
      <>
        <div>About</div>
        {this.state.num}
      </>
    )
  }
}

