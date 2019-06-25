import React from "react";
import TodoItem from "../components/TodoItem";
import { todos } from "../data/todos";
import "../TodoList.css";

function TodoList() {
  let todoList = [];
  for (let item of todos) {
    todoList.push(TodoItem(item));
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
        <tbody>{todoList}</tbody>
      </table>
    </div>
  );
}

export default TodoList;
