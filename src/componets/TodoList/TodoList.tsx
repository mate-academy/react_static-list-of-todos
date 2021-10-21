import React from 'react';
import classNames from 'classnames';

import { Todo } from '../../types/Type';

import { UserInfo } from '../UserInfo';
import { TodoInfo } from '../TodoInfo';

import './TodoList.scss';

type Props = {
  todos: Todo[];
};

export const TodoList: React.FC<Props> = ({ todos }) => (
  <ul className="list">
    {todos.map(todo => (
      <li className={classNames('list__item', { completed: todo.completed })}>
        {todo.user && (
          <UserInfo person={todo.user} />
        )}
        <TodoInfo
          title={todo.title}
          completed={todo.completed}
        />
      </li>
    ))}
  </ul>
);
