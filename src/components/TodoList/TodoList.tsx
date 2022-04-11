import React from 'react';
import './TodoList.scss';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../types';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo__list">
    {todos.map(todo => (
      <li key={todo.id} className="todo__item">
        <TodoInfo {...todo} />
      </li>
    ))}
  </ul>
);
