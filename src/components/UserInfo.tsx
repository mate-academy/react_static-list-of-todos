import React from 'react';

export type PropsUserInfo = {
  name?: string;
  email?: string;
};

export const UserInfo: React.FC<PropsUserInfo> = ({ name, email }) => (
  <>
    <p>
      {'Responsible person: '}
      <strong>
        {name}
      </strong>
    </p>
    <p>
      {'email: '}
      <strong>
        {email}
      </strong>
    </p>
  </>
);
