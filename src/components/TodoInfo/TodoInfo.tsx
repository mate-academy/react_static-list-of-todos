import React from 'react';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const { user, title, completed } = todo;

  return (
    <>
      <div className={`todoInfo todoInfo--${completed}`}>
        <h2>
          {title}
          {completed
            ? ` - is done by ${user?.name ? user.username : 'someone'}`
            : ` - is not done by ${user?.name ? user.username : 'someone'}`}
        </h2>
      </div>
      {user && (
        <UserInfo userInfo={user} />
      )}
    </>
  );
};
