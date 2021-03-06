import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 26 },
      { name: "Stephanie", age: 29 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 29 },
        { name: "Manu", age: 26 },
        { name: "Stephanie", age: 29 }
      ]
    } )
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: "Max", age: 29 },
        { name: event.target.value, age: 26 },
        { name: "Stephanie", age: 29 }
      ]
    } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max')} 
            changed={this.nameChangeHandler} >My Hobbies: Racing</ Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} />
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
