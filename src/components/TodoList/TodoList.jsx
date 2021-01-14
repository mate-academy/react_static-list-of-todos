import React from 'react';
import './TodoList.scss';
import TodoListTypes from '../Type/Type';
import { Todo } from '../Todo/Todo';

function TodoList({ preparedTodos }) {
  return (
    <table className="table">
      <thead>
        <tr className="table__header">
          <td className="table__row">Title</td>
          <td className="table__row">User</td>
          <td className="table__row">Status</td>
        </tr>
      </thead>
      <tbody>
        {
          preparedTodos.map(todos => (
            <Todo {...todos} key={todos.id} />
          ))
        }
      </tbody>
    </table>
  );
}

TodoList.propTypes = TodoListTypes;

export default TodoList;
