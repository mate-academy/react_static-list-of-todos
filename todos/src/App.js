import React, { Component } from 'react';
import TodoList from './components/TodoList';
import { todos } from './todos';
import { users } from './users';
import './App.css';

class App extends Component {
  render() {
    const todoList = todos.map(todo => ({...todo,
      user: users.find(user => user.id === todo.userId)}));
    return (
      <div>
        <h1>Todo list</h1>
        <TodoList todoList={todoList} />
      </div>
    );
  }
}

export default App;
