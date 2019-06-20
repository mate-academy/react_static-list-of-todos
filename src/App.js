import React, {Component} from 'react';
import './App.css';
import {todos, users} from './data' //файл с todos и users
import TodoList from './components/TodoList'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TodoList todos={todos} users={users}/>
    )
  }
}
