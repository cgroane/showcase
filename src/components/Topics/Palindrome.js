import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    checkPal(userInput) {
        var str = userInput.split('');
        str = str.reverse();
        str = str.join('');
        if (str.toLowerCase() == userInput.toLowerCase()) {
            this.setState({palindrome: 'True: '+ str});
        }
        else {
            this.setState({palindrome: 'False: ' + str});
        }
        
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB" >

                <h4>Palindrome</h4>
                <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} ></input>
                <button className="confirmationButton" onClick={() => this.checkPal(this.state.userInput)} >Is this a palindrome?</button>
                <span className="resultsBox" >Palindrome? {this.state.palindrome}</span>

            </div>
        );
    }
}

export default Palindrome;