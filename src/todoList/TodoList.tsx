import React from 'react';
import { ToDo } from '../types/Todo';
import { TodoInfo } from '../todoInfo/TodoInfo';
import { UserInfo } from '../userInfo/UserInfo';
import './TodoList.scss';

type Props = {
  todos: ToDo[];
};
export const TodoList: React.FC<Props> = ({ todos = [] }) => (
  <ul className="listItems">
    {todos.map(({
      title, id, completed, user,
    }) => {
      return user && (
        <li key={id} className="listItems__item">
          <UserInfo name={user.name} email={user.email} />
          <TodoInfo completed={completed} title={title} />
        </li>
      );
    })}
  </ul>
);
