import React, { Component } from 'react'

export default class Sum extends Component {
    constructor() {
        super();

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    number1Fun(val){
        this.setState ( { number1: parseInt(val, 10) } );
    }

    number2Fun(val){
        this.setState ( { number2: parseInt(val, 10) } );
    }

    sumFunction(x, y){
        this.setState({ sum: x + y});
    }

    render() {
        return (
            <div className="puzzleBox sumPB">
            <h4> Sum </h4>
            <input className="inputLine" onChange={(e) => this.number1Fun(e.target.value)}></input>
            <input className="inputLine" onChange={(e) => this.number2Fun(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.sumFunction(this.state.number1, this.state.number2)}> Enter </button>
            <span className="resultsBox"> Sum: {this.state.sum} </span>
            </div>
        )
    }
}