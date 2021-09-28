import React from 'react';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todo } = props;
  const { title, completed } = todo;

  return (
    <>
      <p>
        {title}
      </p>
      <p>
        <b>{completed ? 'Completed' : 'In progress'}</b>
      </p>
    </>
  );
};
