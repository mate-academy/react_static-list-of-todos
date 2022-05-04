import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { Todo } from '../../types/Todo';
import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="todo__list">
      {todos.map(todo => (
        <li
          className={`todo__item ${todo.completed ? 'todo__item--done' : ''}`}
          key={todo.id}
        >
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};
