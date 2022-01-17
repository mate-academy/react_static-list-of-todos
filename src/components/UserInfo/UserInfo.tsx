import React from 'react';

type Props = {
  name: string | undefined,
  email: string | undefined,
};

export const UserInfo: React.FC<Props> = ({
  name = '',
  email = '',
}) => (
  <p className="task__ownerInfo">
    {'Owner: '}
    {name}
    {' mail: '}
    {email}
  </p>
);
