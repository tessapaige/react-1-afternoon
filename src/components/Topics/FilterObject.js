import React, { Component } from 'react';

export default class FilterObject extends Component {
    constructor() {
        super();

        this.state = {
        unFilteredArray: [
        {
            type: 'mammal',
            name: 'Luna',
            pet: 'household'
        },
        {
            type: 'mammal',
            name: 'Moe',
            pet: 'household'
        },
        {
            type: 'reptile',
            name: 'Benjamin',
            pet: 'exotic'
        }
    ],
        userInput: '',
        filteredArray: []
        }
       
    }
 handleChange(val){
            this.setState ( { userInput: val } )
        }

filterArray(prop) {
    var unFilteredArray = this.state.unFilteredArray;
    var filteredArray = [];

    for( let i = 0; i < unFilteredArray.length; i++ ) {
        if ( unFilteredArray[i].hasOwnProperty(prop) ) {
            filteredArray.push(unFilteredArray[i]);
        }
    }
    this.setState( { filteredArray: filteredArray } )
}

    render() {
        return (
            <div className="puzzleBox filterObjectPB">
            <h4> Filter Object </h4>
            <span className="puzzleText"> Original: { JSON.stringify (this.state.unFilteredArray, null, 10) } </span>
            <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }> Filter </button>
            <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
            </div>
        )
    }
}