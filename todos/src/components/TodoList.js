import React, {Component} from 'react';
import {todos} from '../todos';
import TodoItem from './TodoItem';
import './TodoList.css';


class TodoList extends Component {
  render() {
    const todoList = todos.map((todo, i)=> <TodoItem id={todo.id} key={i}/>);
    return (
      <table>
        <thead>
          <tr>
          <th>Todo ID</th>
          <th>Todo</th>
          <th>Completed</th>
          <th>User name</th>
          </tr>
        </thead>
        <tbody>
          {todoList}
        </tbody>
      </table>
    );
  }
}

export default TodoList;
