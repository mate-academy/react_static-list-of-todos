import React from 'react';
import { PrepArray } from '../../react-app-env';

interface Props {
  todo: PrepArray;
}
export const TodoInfo: React.FC<Props> = ({ todo }) => (
  <>
    <div className="content">
      <div className="notification is-warning">
        todo:
        <h4 data-cy="title">{`${todo.title}`}</h4>
      </div>
      <div data-cy="status">{`status: ${todo.completed}`}</div>
      <div>{`phone: ${todo.user?.phone}`}</div>
    </div>
  </>
);
