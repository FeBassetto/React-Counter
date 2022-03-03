import React, { Component } from 'react'

export default class Buttons extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onInc} >+</button>
                <button onClick={this.props.onDec} >-</button>
            </div>
        )
    }
}
