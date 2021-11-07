import React from 'react';
import './TodoList.scss';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { TodoUserType } from '../../types/UserInfoType';

type Props = {
  todoUsers: TodoUserType[]
};

export const TodoList: React.FC <Props> = ({ todoUsers }) => (
  <ul className="usersInfo">
    {
      todoUsers.map((todoUser) => (
        <TodoInfo item={todoUser} key={todoUser.id} />
      ))
    }
  </ul>
);
