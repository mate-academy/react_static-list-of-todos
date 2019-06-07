import React, { Component } from 'react';
import TodoList from './components/TodoList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: props.todos,
      users: props.users
    };
  }

  render() {
    return (
      this.state.todos.length
      ? <TodoList
        todos={this.state.todos}
        users={this.state.users} />
      : 'no todos'
    );
  }
}
