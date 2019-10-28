import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import './TodoList.css';

function TodoList(props) {
  // eslint-disable-next-line react/prop-types
  const { todos } = props;

  return (
    <table className="todo-list">
      <thead className="todo-list-head">
        <tr>
          <td>Title</td>
          <td>Username</td>
          <td>Status</td>
        </tr>
      </thead>
      <tbody className="todo-list-body">
        {todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
      </tbody>
    </table>
  );
}

export default TodoList;
