import React from 'react';
import classNames from 'classnames';
import { Todo } from '../types/Todo';
import './TodoList.scss';

import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todos: Todo[],
};

export const TodoList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="list">
      {todos.map(todo => (
        <li
          className={classNames('list__item',
            {
              'list__item--completed': todo.completed,
            })}
        >
          {todo.user && <UserInfo user={todo.user} />}
          {todo.user && <TodoInfo todo={todo} />}
        </li>
      ))}
    </ul>
  );
};
