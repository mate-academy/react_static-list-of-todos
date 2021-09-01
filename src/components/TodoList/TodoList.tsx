import React from 'react';
import classNames from 'classnames';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import { Todo } from '../../types/Todo';

import './TodoList.scss';

type Props = {
  todo: Todo[],
};

export const TodoList: React.FC<Props> = ({ todo }) => (
  <ul className="todo-list">
    {todo.map((task: Todo) => (
      <li
        key={task.id}
        className={classNames('todo-list__element', {
          'todo-list__element--true': task.completed,
          'todo-list__element--false': !task.completed,
        })}
      >
        <UserInfo user={task.user} />
        <TodoInfo todo={task} />
      </li>
    ))}
  </ul>
);
