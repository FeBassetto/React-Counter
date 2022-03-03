import React, { Component } from 'react'

export default class PassoForm extends Component {
    render() {
        return (
            <div>
                <label htmlFor="amountIput">Quantidade de passos por vez</label><br />
                <input id="amountInput" type="number"
                    value={this.props.amountCounter}
                    onChange={e => this.props.handleChange(+e.target.value)}
                />
            </div>
        )
    }
}
