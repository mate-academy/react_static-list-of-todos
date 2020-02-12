import React, { Component } from 'react';
import TodoItem from './TodoItem';



class TodoList extends Component {
  render() {
    const todoList = [];
    for (let todo of this.props.todos) {
      const currentUser = this.props.users.find(person => person.id = todo.userId);
      todoList.push(<TodoItem user={currentUser} todo={todo}/>)
    }
    console.log(todoList);

    return (
      <table>
        <thead>
          <td>User</td>
          <td>Title</td>
          <td>Status</td>
        </thead>
        {todoList}
      </table>
    );
  }
}

export default TodoList;
