import React, { Component } from 'react';
import logo from './img/image.png';
import './App.css';
import Nav from './components/Nav'

//traer un .json:
import { tasks } from './components/task.json'

console.log(tasks);

class App extends Component {
  constructor () {
    super();
    this.state = {
      tasks //este tasks es el que se importó
    }
  }

  render() {
    const tasks = this.state.tasks.map((tasks, i) => {
      return (
        <div className="col-md-4">
        <div className="card">
            <div className="card-header">
              <h3>{tasks.title} </h3>
            </div>
            {tasks.created} <br></br>
            {tasks.content} 
        </div>
        </div>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
      
          <img src={logo} className="App-logo" alt="logo" />
        </header>
            <div className="container">
              <div className="row mt-4">

             {tasks}
              </div>
             </div>
      </div>
    );
  }
}

export default App;
