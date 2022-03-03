import React, { Component } from 'react'

export default class Display extends Component {
  

    render() {
    return (
      <div>
          <h3>Passo: {this.props.number}</h3>
      </div>
    )
  }
}
