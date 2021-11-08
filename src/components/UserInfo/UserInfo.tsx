import React from 'react';
import './UserInfo.scss';

interface Props {
  name: string,
  email: string,
}

export const UserInfo: React.FC<Props> = ({ name, email }) => {
  return (
    <div>
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
    </div>
  );
};
