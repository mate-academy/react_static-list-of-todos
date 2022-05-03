import React from 'react';

type Props = {
  status: boolean,
};

export const TodoInfo: React.FC<Props> = ({ status }) => (
  <>
    {status ? 'Done' : 'Not comlete'}
  </>
);
