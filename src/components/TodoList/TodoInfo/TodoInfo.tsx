import React from 'react';

type Props = {
  status: boolean;
  title: string;
};

export const TodoInfo: React.FC<Props> = props => {
  const {
    status,
    title,
  } = props;

  return (
    <>
      <span>{title}</span>
      <span>{status ? 'Completed' : 'Not completed'}</span>
    </>
  );
};
