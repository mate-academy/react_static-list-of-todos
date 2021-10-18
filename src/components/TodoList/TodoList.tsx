import React from 'react';
import classNames from 'classnames';

import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';

import { Todo } from '../../types/Todo';

import './TodoList.scss';

type Todos = {
  todos: Todo[];
};

export const TodoList: React.FC<Todos> = ({ todos }) => (
  <ul className="TodoList">
    {todos.map((todoItem: Todo) => (
      <li
        key={todoItem.id}
        className={classNames('TodoList__item', (todoItem.completed)
          ? ('TodoList__item--completed')
          : ('TodoList__item--notcompleted'))}
      >
        {todoItem.user && (
          <UserInfo {...todoItem.user} />
        )}
        <TodoInfo {...todoItem} />
      </li>
    ))}
  </ul>
);
