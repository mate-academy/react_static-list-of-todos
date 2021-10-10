import React from 'react';
import classNames from 'classnames';
import { UserInfo } from './UserInfo';
import { TodoInfo } from './TodoInfo';
import { Todo } from '../types/todo';
import '../styles/TodoList.scss';

type Props = {
  todoLists: Todo[]
};

export const TodoList: React.FC<Props> = ({ todoLists }) => (
  <ul className="todoList">
    {todoLists.map((todoListLine) => (
      todoListLine.user
      && (
        <li
          className={classNames(
            'todoList__item',
            {
              'todoList__item--completed': todoListLine.completed,
            },
          )}
          key={todoListLine.id}
        >
          <UserInfo
            user={todoListLine.user}
          />
          <TodoInfo
            todoInfoList={todoListLine}
          />
        </li>
      )
    ))}
  </ul>
);
