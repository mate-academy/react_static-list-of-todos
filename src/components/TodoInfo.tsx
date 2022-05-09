import React from 'react';

type Props = {
  title: string,
  completed: boolean,
};

export const TodoInfo: React.FC<Props> = ({ title, completed }) => (
  <>
    <strong>{' Todo: '}</strong>
    {title}
    <strong>{' Status: '}</strong>
    <strong>{completed ? 'completed' : 'no completed'}</strong>
  </>
);
