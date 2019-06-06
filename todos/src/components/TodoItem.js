import React, {Component} from 'react';
import {todos} from '../todos';
import User from './User';
import './TodoItem.css'

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.todo = todos.find(todo => todo.id === this.props.id);
  }

  render() {
    return (
      <tr>
        <td>{this.todo.id}</td>
        <td className="todos">{this.todo.title}</td>
        <td>{this.todo.completed ? 'yes' : 'no'}</td>
        <User userId={this.todo.userId}/>
      </tr>
    );
  }


}

export default TodoItem;
