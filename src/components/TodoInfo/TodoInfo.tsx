import React from 'react';
import { PreparedTodo } from '../../react-app-env';
import { UserInfo } from '../UserInfo/UserInfo';

interface Props {
  object: PreparedTodo;
}
export const TodoInfo: React.FC<Props> = ({ object }) => (
  <>
    {object.user && (<UserInfo object={object.user} />)}
    <h3>{object.title}</h3>
    <h3 className={object.completed ? 'task-status--comp' : 'task-status'}>
      {object.completed
        ? 'completed!'
        : 'not completed'}
    </h3>
  </>
);
