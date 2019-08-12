import React, { Component } from 'react'

import ScrollText from 'react-scroll-text'

export default class App extends Component {
  state = {
    text: ''
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  render () {
    return (
      <div style={{ width: 300 }}>
        <input value={this.state.text} onChange={this.handleChange} />
        <ScrollText style={{ color: 'red' }} className="test">
          {this.state.text}
        </ScrollText>
      </div>
    )
  }
}
