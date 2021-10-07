import React from 'react';
import classNames from 'classnames';

import { Todo } from '../../types/Todo';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';

import './TodoList.scss';

type Props = {
  todos: Todo[]
};

export const TodoList: React.FC<Props> = props => {
  const { todos } = props;

  return (
    <ul
      className="todo-list"
    >
      <li className="todo-list__item todo-list__item--heading">
        <span>Nickname</span>
        <span>Full name</span>
        <span>Email</span>
        <span>Todo</span>
        <span>Status</span>
      </li>

      {todos.map(item => {
        const {
          id,
          completed,
          title,
          user,
        } = item;

        return user && (
          <li
            key={id}
            className={classNames(
              'todo-list__item',
              {
                'todo-list__item--completed': completed,
              },
            )}
          >
            <UserInfo
              name={user.name}
              username={user.username}
              email={user.email}
            />
            <TodoInfo
              title={title}
              status={completed}
            />
          </li>
        );
      })}
    </ul>
  );
};
