import React from 'react';

type Props = {
  todoinfo: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { title, completed, user } = props.todoinfo;

  return (
    <>
      <p>
        {'Task: '}
        {title}
      </p>
      <p>
        {'Status: '}
        {completed ? 'Completed' : 'In process'}
      </p>
      <p>
        {'Username: '}
        {user && user.username}
      </p>
    </>
  );
};
