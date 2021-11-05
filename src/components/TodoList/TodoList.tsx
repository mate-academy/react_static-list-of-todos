import React from 'react';
import { TodoInfo } from '../TodoInfo';
import { UserInfo } from '../UserInfo';
import { PreparedTodoType } from '../../Types/PreparedTodosType';

import './TodoList.scss';

type Props = {
  preparedTodosProps: PreparedTodoType[],
};

export const TodoList: React.FC<Props> = ({ preparedTodosProps }) => (
  <ul className="usersList">
    {preparedTodosProps.map((todo: PreparedTodoType) => (
      <li key={todo.userId} className="usersList__user">
        <TodoInfo {...todo} />
        {todo.user && <UserInfo {...todo.user} />}
      </li>
    ))}
  </ul>
);
