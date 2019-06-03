import React from 'react';
import TodoItem from "./TodoItem.js"
import User from "./User.js"

function TodoList(props) {
  return (
    <td>
      <table>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Competed</th>
        </tr>
        {props.todoList.map((value, index) => {
          return (
            <TodoItem todo={value} />
          );
        })}
      </table>
    </td>
  );
}

export default TodoList;
