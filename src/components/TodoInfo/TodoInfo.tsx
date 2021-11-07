import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoUserType } from '../../types/UserInfoType';

type Props = {
  item: TodoUserType;
};

export const TodoInfo: React.FC <Props> = ({ item }) => {
  const { title, completed, user } = item;

  return (
    <li className="TodoInfo">
      <h2 className="item-title">{title}</h2>

      <h3 className="item-completed">
        {completed
          ? '✅ 🏆 YOU DID IT! 🏆 ✅'
          : '🔴 ❗️Just Do It❗️ 🔴'}
      </h3>
      {user && <UserInfo userInfo={user} />}
    </li>
  );
};
