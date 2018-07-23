import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 26 },
      { name: "Stephanie", age: 29 }
    ]
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

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>Switch Name</button>
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
    );
  }
}

export default App;
