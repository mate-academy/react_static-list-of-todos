import React from 'react';
import classNames from 'classnames';
import './TodoList.scss';

import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <ul className="TodoList">
    {todos.map(todo => (
      <li
        key={todo.id}
        className={classNames(
          'TodoInfo',
          {
            'TodoInfo--completed': todo.completed,
          },
        )}
      >
        <TodoInfo title={todo.title} />
        {todo.user && (
          <UserInfo user={todo.user} />
        )}
      </li>
    ))}
  </ul>
);
