import React, { Component } from 'react'
import User from './User.jsx'

export default class TodoItem extends Component {
  render() {
    const todoList = [];
    for (const item of this.props.todoS) {
      const user = this.props.users.find(i => i.id === item.userId);
        todoList.push(
          <tr key={item.title} className={item.completed === true ? 'green' : 'red'}>
            <td>{item.title}</td>
            <td>{item.completed === true ? `completed` : `not completed`}</td>
          <User user={user}/>
          </tr>
        );
      }
    return (
      <tbody>
        <tr>
          <th>Todo</th>
          <th>Status</th>
          <th>User</th>
        </tr>
        {todoList}
      </tbody>
    )
  }
}
