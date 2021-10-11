import React from 'react';

import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

import { PreparedTodosType } from '../../types/PreparedTodosType';

import './TodoList.scss';

type Props = {
  todoLists: PreparedTodosType[]
};

export const TodoList: React.FC<Props> = ({ todoLists }) => (
  <ul className="todo-list">
    {todoLists.map((todoListItem) => (
      todoListItem.user
      && (
        <li
          className={
            todoListItem.completed
              ? 'todo-list__item todo-list__item--active'
              : 'todo-list__item'
          }
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
