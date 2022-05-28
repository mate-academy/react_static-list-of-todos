import React from 'react';
import { Todo } from '../../react-app-env';
import { UserInfo } from '../UserInfo/UserInfo';

interface Props {
  obj: Todo;
}
export const TodoInfo: React.FC<Props> = ({ obj }) => (
  <>
    {obj.user && (<UserInfo object={obj.user} />)}
    <h3>{obj.title}</h3>
    <h3 className={obj.completed ? 'task-status--comp' : 'task-status'}>
      {obj.completed
        ? 'completed!'
        : 'not completed'}
    </h3>
  </>
);
