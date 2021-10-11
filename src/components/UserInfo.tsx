import React from 'react';

type Props = {
  name: string;
  username: string;
  email: string;
};

export const UserInfo: React.FC<Props> = props => (
  <>
    <span>
      {'Name: '}
      {props.username}
      {' ('}
      {props.name}
      {') '}
    </span>
    <span>
      {'Email: '}
      {props.email}
    </span>
  </>
);
