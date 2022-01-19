import React from 'react';
import classNames from 'classnames';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { TodoWithUser } from '../../types/Todo';

import './TodoList.scss';

interface Props {
  todoItems: TodoWithUser[];
}

export const TodoList: React.FC<Props> = ({ todoItems }) => (
  <ul className="todo-list">
    {todoItems.map(todo => (
      <li
        className={classNames('todo-list__item',
          {
            Completed: todo.completed,
            Wait: !todo.completed,
          })}
        key={todo.id}
      >
        <TodoInfo todoItem={todo} />
      </li>
    ))}
  </ul>
);
