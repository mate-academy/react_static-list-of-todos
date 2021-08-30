import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

interface Props {
  todos: Todo[]
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <table className="todo-table">
    <thead className="todo-table__head">
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Email</th>
        <th>Task</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {todos.map(todo => (
        <tr
          className={todo.completed ? 'todo-table__body-row--done' : 'todo-table__body-row--undone'}
          key={todo.id}
        >
          <TodoInfo todo={todo} />
        </tr>
      ))}
    </tbody>
  </table>
);
