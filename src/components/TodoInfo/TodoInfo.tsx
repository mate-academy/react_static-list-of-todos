import React from 'react';

import './TodoInfo.scss';

type Props = {
  todo: TodoItem;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { title, completed } = props.todo;

  return (
    <>
      <li>{title}</li>
      <li>{completed ? 'true' : 'false'}</li>
    </>
  );
};
