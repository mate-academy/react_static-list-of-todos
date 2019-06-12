import React from "react";
import TodoItem from "../components/TodoItem";
import { todos } from "../data/todos";
import { users } from "../data/users";
import "../TodoList.css";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.todoList = [];
  }

  render() {
    for (let item of todos) {
      const user = users.find(u => u.id === item.userId);
      this.todoList.push(
        <TodoItem
          title={item.title}
          name={user.name}
          completed={item.completed}
          key={item.title}
        />
      );
    }
    return (
      <div key="wrapper">
        <table className="table">
          <thead>
            <tr>
              <td>Title</td>
              <td>User Name</td>
              <td>Completed</td>
            </tr>
          </thead>
          <tbody>{this.todoList}</tbody>
        </table>
      </div>
    );
  }
}
