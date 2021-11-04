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
      <h2>
        {title}
      </h2>
      <strong>
        Status:
      </strong>

      {completed
        ? ' Done'
        : ' In process'}
      {user && <UserInfo userInfo={user} />}
    </li>
  );
};
