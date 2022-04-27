import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
import './TodoList.scss';

type Props = {
  todoList: Todo[],
};

export const TodoList: React.FC<Props> = ({ todoList }) => (
  <ul className="todo-list">
    {todoList.map(todo => (
      <li
        className="todo-list__item"
        key={todo.id}
      >
        <TodoInfo todo={todo} />
      </li>
    ))}
  </ul>
);
