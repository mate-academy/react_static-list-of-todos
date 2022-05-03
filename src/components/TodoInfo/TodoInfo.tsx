import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../User/UserInfo';
import './TodoInfo.scss';

type Props = Todo;

export const TodoInfo: React.FC<Props> = ({ title, completed, user }) => (
  <>
    <h1 className="item__title">{title}</h1>
    <p className="item__status">
      Status:
      {completed
        ? <span className="item__completed"> completed</span>
        : <span className="item__notcompleted"> not completed</span>}
    </p>
    <UserInfo name={user?.name} email={user?.email} />
  </>
);
