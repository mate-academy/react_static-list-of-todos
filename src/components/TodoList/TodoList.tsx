import React from 'react';
import { PreparedTodos } from '../../react-app-env';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import './TodoList.scss';

interface Props {
  todos: PreparedTodos[],
}

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li key={todo.id} className="todo-list__item">
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
