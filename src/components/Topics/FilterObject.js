import React, {Component} from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {           
            people: [
                {
                    name: 'Connor Roane',
                    title: 'Number 1 Biscuit Fan',
                    age: 23
                }, {
                    name: 'Simon Garfunkel',
                    age: '50',
                    hometown: 'Chicago'
                }, {
                    name: 'Elton John',
                    title: 'Musician',
                }],

            userInput: "",
            filteredArray: [],
        }
    }
    handleChange(val) {
        this.setState({userInput: val});
    }

    filterPeople(prop) {
        var people = this.state.people;
        var filteredPeople = [];
        // arr = arr.filter((x) => x.hasOwnProperty(prop))
        for (var i = 0; i<people.length; i++) {
            if (people[i].hasOwnProperty(prop)) {
                filteredPeople.push(people[i]);
            }
        }

        this.setState({filteredArray: filteredPeople}); 
    }

    render() {
         return (
            <div className="puzzleBox filterObjectPB" >

                <h4>Filter Object</h4>
                <span className="puzzleText" >People: {JSON.stringify(this.state.people, null, 10)} </span>
                <input className="inputLine" onChange={(e)=> this.handleChange(e.target.value) } ></input>
                <button className="confirmationButton" onClick={() => this.filterPeople(this.state.userInput) } ></button>
                <span className="resultsBox filterObjectRB" >Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>

            </div>
         );
    }
}

export default FilterObject;