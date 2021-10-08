import React from 'react';
import '../App';

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
      <span className="user__title">
        {title}
      </span>
      <span className="user__completed">
        {completed ? 'Done' : 'Failed'}
      </span>
    </span>
  );
};
