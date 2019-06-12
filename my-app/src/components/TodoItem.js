import React, {Component} from 'react';
import User from './User'

export default class TodoItem extends Component {
  render(){
    console.log(this.props.user)
  return (
    <tbody>
      <tr>
        <User user={this.props.user}/>
        <td>{this.props.todo.title}</td>
        <td>{this.props.todo.completed ? 'completed' : 'uncompleted'}</td>
      </tr>
    </tbody>
  );
  }
}
