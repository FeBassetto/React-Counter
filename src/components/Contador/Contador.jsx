import React, { Component } from "react";
import './Contador.css'

import Display from "./Display/Display";
import Buttons from "./Buttons/Buttons";
import PassoForm from "./PassoForm/PassoForm";

export default class Contador extends Component {


    constructor(props) {
        super(props)

        this.state = {
            number: props.initialNumber || 0,
            amount: props.amountNumber || 5
        }

    }

    inc = () => {
        this.setState({
            number: this.state.number + this.state.amount
        })
    }

    dec = () => {
        this.setState({
            number: this.state.number - this.state.amount
        })
    }

    setAmount = (newAmount) => {
        this.setState({
            amount: newAmount
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display number={this.state.number} />
                <PassoForm amountCounter={this.state.amount} handleChange={this.setAmount} />
                <Buttons onDec={this.dec} onInc={this.inc} />
            </div>
        )
    }

}
