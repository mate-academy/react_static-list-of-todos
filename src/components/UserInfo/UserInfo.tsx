import React from 'react';

import './UserInfo.scss';

type Props = {
  name: string,
  email: string,
};

export const UserInfo: React.FC<Props> = (
  {
    name,
    email,
  },
) => (
  <div className="UserInfo">
    <p>{ name }</p>
    <a className="UserInfo__email" href={`mailto:${email}`}>{ email }</a>
  </div>
);
