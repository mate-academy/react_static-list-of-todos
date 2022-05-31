import React from 'react';
import { Todos } from '../../react-app-env';
import UserInfo from '../UserInfo/UserInfo';

type Props = {
  todo: Todos;
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <UserInfo
      user={todo.user ? todo.user : {
        name: 'No name',
        email: 'No email',
      }}
    />
    <p data-cy="title">
      Task:
      {todo.title}
    </p>
    <p data-cy="status">
      Complited status:
      {todo.completed ? ' true' : ' false'}
    </p>
  </>
);

export default TodoInfo;
