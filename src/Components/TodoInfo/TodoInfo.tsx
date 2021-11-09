import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodosItem } from '../../types/TodosItem';

type Props = {
  doItem: TodosItem;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { doItem } = props;
  const { title, completed, user } = doItem;

  return (
    <li className="todoInfo">
      <h2 className="todoInfo__title">
        {title}
      </h2>
      <span className="todoInfo__status">
        Status:
      </span>

      {completed
        ? ' Done'
        : ' In process'}
      {user && <UserInfo user={user} />}
    </li>
  );
};
