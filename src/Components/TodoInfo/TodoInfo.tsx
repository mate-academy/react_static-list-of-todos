import React from 'react';
import { Todo } from '../../types';
import UserInfo from '../UserInfo/UserInfo';

type Props = Todo;

const TodoInfo: React.FC<Props> = ({
  title,
  completed,
  user,
}) => (
  <>
    <h3 className={`${completed ? 'card__completed' : 'card__inprogress'}`}>
      {`${completed ? 'Copmleted' : 'Inprogress'}`}
    </h3>
    <h2 className="card__title">{title}</h2>
    {user && <UserInfo user={user} />}
  </>
);

export default TodoInfo;
