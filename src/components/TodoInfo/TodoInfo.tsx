import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import { List } from '../../type/typeList';

type Props = {
  usersInfo: List;
};

const TodoInfo: React.FC<Props> = ({ usersInfo }) => (
  <>
    <h3>
      {'Title: '}
      {usersInfo.title}
    </h3>

    <label
      htmlFor={usersInfo.id}
    >
      {'To Do: '}
    </label>

    <input
      type="checkbox"
      id={usersInfo.id}
      checked={usersInfo.completed}
    />

    <UserInfo user={usersInfo.user} />
  </>
);

export default TodoInfo;
