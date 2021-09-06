import React from 'react';

type Props = {
  todoinfo: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { title, completed, user } = props.todoinfo;

  return (
    <>
      <span>
        {title}
      </span>
      <span>
        {completed ? 'Completed' : 'In process'}
      </span>
      <span>
        {user && user.username}
      </span>
    </>
  );
};
