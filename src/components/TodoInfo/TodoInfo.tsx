import React from 'react';

import { User } from '../User/User';

type Props = {
  title: string,
  completed: boolean
  phone: string,
};

export const TodoInfo: React.FC<Props> = ({ title, completed, phone }) => (
  <>
    <h3 data-cy="title">
      {title}
    </h3>

    <p data-cy="status">
      {completed ? 'Completed' : 'Not completed'}
    </p>
    <p>
      <User phone={phone} />
    </p>
  </>
);
