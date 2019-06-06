import React, {Component} from 'react';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <TodoList/>
      </div>
    );
  }
}

export default App;
