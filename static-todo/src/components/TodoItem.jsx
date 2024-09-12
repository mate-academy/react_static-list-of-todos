import React, { Component } from 'react';
import User from './User.jsx';

class TodoItem extends Component {
  render() {
    return (
      <tr className={this.props.item.completed ? "completed" : "still_pending"}>
        <td>{this.props.item.title}</td>
        <td >{this.props.item.completed ? "Completed" : "Still pending"}</td>
        <td><User user={this.props.user.name}/></td>
      </tr>
    );
  }
}

export default TodoItem;