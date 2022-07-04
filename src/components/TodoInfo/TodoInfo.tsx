import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import { PreparedToDo } from '../../types/preparedTodo';

type Props = {
  preparedToDo: PreparedToDo;
};

export const TodoInfo: React.FC<Props> = ({ preparedToDo }) => {
  return (
    <>
      <h2 data-cy="title">{preparedToDo.title}</h2>
      <p data-cy="status">
        {preparedToDo.completed ? 'completed' : 'not completed'}
      </p>
      <UserInfo user={preparedToDo.user}>
        {preparedToDo.user ? '' : 'Unknown'}
      </UserInfo>
    </>
  );
};
