import React, { Component } from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
handleChange(val){
    this.setState ( { userInput: val } )
    }    

palindrome1(userInput) {
    var a = userInput;
    var b = userInput;
    b = b.split('');
    b = b.reverse();
    b = b.join('')

    if ( a === b ) {
        this.setState( { palindrome: 'true' } );
    } else {
        this.setState ( { palindrome: 'false' } );
    }
}


    render() {
        return (
            <div className="puzzleBox PalindromePB">
            <h4> Palindrome </h4>
            <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton" onClick={() => this.palindrome1(this.state.userInput)}> Enter </button>
            <span className="resultsBox">
            Palindrome: { this.state.palindrome }
            </span>
            </div>
        )
    }
}