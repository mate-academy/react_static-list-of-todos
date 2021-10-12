import React from 'react';

type Props = {
  status: boolean;
  title: string;
};

export const TodoInfo: React.FC<Props> = ({
  status,
  title,
}) => (
  <>
    <span>{title}</span>
    <span>{status ? 'Completed' : 'Not completed'}</span>
  </>
);
