import React from 'react';
import classNames from 'classnames';

import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import { PreparedTodo } from '../../types/PreparedTodo';

import './TodoList.scss';

type Props = {
  todos: PreparedTodo[]
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      todo.user
      && (
        <li
          className={classNames(
            'todo-list__item',
            {
              'todo-list__item--done': todo.completed,
            },
          )}
          key={todo.id}
        >
          <UserInfo
            user={todo.user}
          />
          <TodoInfo
            todo={todo}
          />
        </li>
      )
    ))}
    ;
  </ul>
);
