import React from 'react';
import 'bulma/css/bulma.min.css';
import { Box } from 'react-bulma-components';

import { UserInfo, User } from '../UserInfo/UserInfo';

export interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean,
  user: User | undefined;
}

type Props = {
  todo:Todo,
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <Box
      justifyContent="center"
      backgroundColor="primary"
      textColor="white"
    >
      <div data-cy="">
        <h2>{todo.title}</h2>
        <b>{todo.completed ? 'compleated' : 'in progress'}</b>
      </div>
      { todo.user ? <UserInfo user={todo.user} /> : 'waiting for user info'}
    </Box>
  );
};
