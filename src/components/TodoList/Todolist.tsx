import React from 'react';
import classNames from 'classnames';

import { TodoTypes } from '../../types/TodoTypes';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoList.scss';

type Props = {
  todos: TodoTypes[]
};

export const TodoList:React.FC<Props> = ({ todos }) => (
  <ul className="todoList">
    {todos.map((todoListItem) => (
      todoListItem.user
      && (
        <li
          className={classNames(
            'todoList__item',
            { 'todoList__item--done': todoListItem.completed },
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
