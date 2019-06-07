import React, { Component } from 'react'
import './TodoList.css';
import TodoItem from './TodoItem.jsx'


export default class TodoList extends Component {
  render() {
    return (
        <table className="todo-list">
          <TodoItem todoS={this.props.todoS} users={this.props.users}/>
        </table>
    )
  }
}
