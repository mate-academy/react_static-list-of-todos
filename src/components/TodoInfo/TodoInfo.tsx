import React from 'react';
import './TodoInfo.scss';
import { UserInfo } from '../UserInfo/UserInfo';
import { TodoUserType } from '../../types/UserInfoType';

type Props = {
  item: TodoUserType;
};

export const TodoInfo: React.FC <Props> = ({ item }) => (
  <li className="TodoInfo">
    <h2 className="item-title">{item.title}</h2>

    <h3 className="item-completed">
      {item.completed
        ? '✅ 🏆 YOU DID IT! 🏆 ✅'
        : '🔴 ❗️Just Do It❗️ 🔴'}
    </h3>
    {item.user && <UserInfo userInfo={item.user} />}
  </li>
);
