import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.css'
import ToDoList from './components/toDoList'

class App extends Component {
  state = {
    count: 0
  }

  render() {
    return (
      <div className="App">
        <ToDoList />
      </div>
    )
  }
}

export default App



