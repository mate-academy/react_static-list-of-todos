import React from 'react';
import { Todo } from '../Todo';
import './TodoList.scss';
import { TodoListShape } from '../../shapes/TodoListShape';

export const TodoList = ({ preparedTodos }) => (
  <table className="todoList">
    <tr className="todoList__row todoList__row--title">
      <th className="todoList__cell">Task</th>
      <th className="todoList__cell">Complete</th>
      <th className="todoList__cell">Name</th>
    </tr>
    {preparedTodos.map(todo => (
      <tr className="todoList__row" key={todo.userId}>
        <Todo todo={todo} />
      </tr>
    ))}
  </table>
);

TodoList.propTypes = TodoListShape;
