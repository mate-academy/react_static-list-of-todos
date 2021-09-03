import React from 'react';

type Props = {
  todo: Todo,
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
        {completed ? 'Done' : 'In progress'}
      </p>
    </>
  );
};
