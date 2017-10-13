import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
            number1: '0',
            number2: 0,
            sum: null
        }    
    }

    handleChange(name, val){
        this.setState({[name]: val}, function cb(){
            console.log(this.state)});
        
    }

    findSum(num1,num2) {
        var summed = parseInt(num1,10) + parseInt(num2,10);
        this.setState({sum: summed}
        );
    }

    render () {
        return (
            <div className="puzzleBox">

                <h4>Sum</h4>
                {/* <input className="inputLine" onChange={(e) => this.handleChange(this.state.number1, e.target.value)} ></input>
                <input className="inputLine" name="number2" onChange={(e) => this.handleChange(this.state.number2, e.target.value)} ></input> */}

                <input className="inputLine" name="number1" onChange={(e) => this.handleChange('number1', e.target.value)} ></input>
                <input className="inputLine" name="number2" onChange={(e) => this.handleChange('number2', e.target.value)} ></input>

                <button className="confirmationButton" onClick={() => this.findSum(this.state.number1, this.state.number2)} >Add Up</button>
                <span className="resultsBox" >Sum: {this.state.sum}</span>

            </div>
        );
    }
}

export default Sum;