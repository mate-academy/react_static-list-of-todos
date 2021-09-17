import React from 'react';

type Props = {
  user: {
    title: string,
    completed: boolean,
  }
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { title, completed } = user;

  return (
    <span className="user">
      <span className="userTitle">
        {title}
      </span>
      <span className="userCompleted">
        {completed ? 'Done' : 'Failed'}
      </span>
    </span>
  );
};
