import React from 'react';

type Props = {
  name: string | null,
  email: string | null,
};

const UserInfo: React.FC<Props> = ({ name, email }) => (
  <>
    <h2>{name}</h2>
    <p>{email}</p>
  </>
);

export default UserInfo;
