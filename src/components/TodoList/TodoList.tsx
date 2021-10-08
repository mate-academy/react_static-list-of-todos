import React from 'react';
import classNames from 'classnames';

import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import { TodoTypes } from '../../types/TodoTypes';

import './TodoList.scss';

type Props = {
  todoLists: TodoTypes[]
};

export const TodoList: React.FC<Props> = ({ todoLists }) => (
  <ul className="todoList">
    {todoLists.map((todoListItem) => (
      todoListItem.user
      && (
        <li
          className={classNames(
            'todoList__item',
            {
              'todoList__item--done': todoListItem.completed,
            },
          )}
          key={todoListItem.id}
        >
          <UserInfo
            user={todoListItem.user}
          />
          <TodoInfo
            todoInfoList={todoListItem}
          />
        </li>
      )
    ))}
  </ul>
);
