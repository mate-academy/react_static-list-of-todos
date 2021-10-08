import React from 'react';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

type Props = {
  todo: ToDo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const { user, title, completed } = todo;

  return (
    <>
      <div className={`todoInfo todoInfo--${completed}`}>
        <h2>
          {`Task: "${title}"`}
          {completed
            ? ` - is completed ${'\u2705'}`
            : ` - is not completed ${'\u274c'}`}
        </h2>
      </div>
      {user && (
        <UserInfo userInfo={user} />
      )}
    </>
  );
};
