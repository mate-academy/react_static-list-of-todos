import React from 'react';
import { PreparedToDo } from '../../types/PreparedToDo';
import { UserInfo } from '../UserInfo/UserInfo';

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
