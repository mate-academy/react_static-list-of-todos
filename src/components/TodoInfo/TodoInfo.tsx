import React from 'react';
import { Todos } from '../../react-app-env';
import UserInfo from '../UserInfo/UserInfo';

type Props = {
  todo: Todos;
};

const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <UserInfo
      name={todo.user ? todo.user.name : null}
      email={todo.user ? todo.user.email : null}
    />
    <p>
      Task:
      {todo.title}
    </p>
    <p>
      Complited status:
      {todo.completed ? ' true' : ' false'}
    </p>
  </>
);

export default TodoInfo;
