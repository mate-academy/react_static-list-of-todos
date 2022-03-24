import React from 'react';

import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <div className="todo">
    <ul className="todo__list">
      {todos.map((todoItem) => (
        <li className="todo__item" key={todoItem.id}>
          <TodoInfo {...todoItem} />
        </li>
      ))}
    </ul>
  </div>
);
