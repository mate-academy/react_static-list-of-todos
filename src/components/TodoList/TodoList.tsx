import React from 'react';

import { TodoInfo } from '../TodoInfo';

import { Todo } from '../../types/Todo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="TodoList container">
      {todos.map((todo) => (
        <li key={todo.id} className="TodoList__item">
          <TodoInfo todo={todo} />
        </li>
      ))}
    </ul>
  );
};
