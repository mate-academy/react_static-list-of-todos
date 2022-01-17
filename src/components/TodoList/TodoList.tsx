import React from 'react';
import { PreparedTodos } from '../../types/PreparedTodos';
import './TodoList.scss';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: PreparedTodos[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li className="todo-list__item" key={todo.id}>
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
