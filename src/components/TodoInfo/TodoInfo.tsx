import React from 'react';

import './TodoInfo.scss';

type Props = {
  todo: TodoItem;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { title, completed } = props.todo;

  return (
    <>
      <p>{title}</p>
      <p>{completed ? 'true' : 'false'}</p>
    </>
  );
};
