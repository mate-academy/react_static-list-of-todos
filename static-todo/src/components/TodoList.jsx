import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const todoList = [];
      for (const item of this.props.todos) {
        const currentUser = this.props.users.find(person => person.id === item.userId)
        todoList.push(<TodoItem item={item} key={item.id} user={currentUser}
      />);
      }
    return (
      <table>
        <thead>
            <tr>
              <th>Title</th>
              <th>Completed</th>
              <th>User</th>
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