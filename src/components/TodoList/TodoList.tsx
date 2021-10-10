import React from 'react';

import './TodoList.scss';
import { ToDo } from '../../Types/ToDo';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: ToDo[];
};

export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <ul className="todos__main main">
    {todos.map(({
      title,
      id,
      completed,
      user,
    }) => {
      return user && (
        <li
          className="main__item item"
          key={id}
        >
          <UserInfo name={user.name} email={user.email} />
          <TodoInfo completed={completed} title={title} />
        </li>
      );
    })}
  </ul>
);
