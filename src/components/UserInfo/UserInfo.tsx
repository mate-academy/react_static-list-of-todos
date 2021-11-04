import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <>
      <p>
        User:&nbsp;
        <b>
          {name}
        </b>
      </p>
      <p>
        User email:
        <a href={`mailto:${email}`}>
          &nbsp;
          {email}
        </a>
      </p>
    </>
  );
};
