import React from 'react';

type Props = {
  todoName: string;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todoName } = props;

  return (
    <h2 className="TodoInfo__title">{ todoName }</h2>
  );
};
