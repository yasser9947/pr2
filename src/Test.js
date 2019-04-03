import React, { Component } from 'react'

export default class Test extends Component {
  render() {
    return (
      <div>
       hey {this.props.name}
      </div>
    )
  }
}
