import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
            unfilteredArray: ['one','two','three'],
            userInput: '',
            filteredArray: []
        }
    }
    handleChange(val) {
        this.setState({userInput: val});
    }

    filterArray(string) {
        var arr = this.state.unfilteredArray;
        var filteredArr = [];
    
        for (var i = 0; i < arr.length; i++){
            if(arr[i].includes(string)) {
                filteredArr.push(arr[i]);
            }
        }
        this.setState({filteredArray: filteredArr});
    }

    render () {
        return (
            <div className="puzzleBox filterStringPB" >

                <h4>Filter String</h4>
                <span className="puzzleText" >Original: {JSON.stringify(this.state.unfilteredArray)} </span>
                <input className="inputLine" onChange= {(e) => this.handleChange(e.target.value)} ></input>
                <button className="confirmationButton" onClick={() => this.filterArray(this.state.userInput)} >Filter</button>
                <span className="resultsBox filterStringRB" >Filtered: {JSON.stringify(this.state.filteredArray)}</span>

            </div>
        );
    }
}

export default FilterString;