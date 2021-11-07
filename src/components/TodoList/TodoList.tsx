import React from 'react';
import classNames from 'classnames';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { TodoUser } from '../../types/types';
import './TodoList.scss';

type Props = {
  todoList: TodoUser[]
};

export const TodoList: React.FC<Props> = ({ todoList }) => (
  <ul className="todo-list">
    {todoList.map(todoCard => (
      <li
        className={classNames('todo-list__block', {
          done: todoCard.completed,
        })}
        key={todoCard.id}
      >
        <TodoInfo todoInfo={todoCard} />
      </li>
    ))}
  </ul>
);
