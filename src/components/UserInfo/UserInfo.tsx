import React from 'react';

import './UserInfo.scss';

type Props = {
  name: string;
  username: string;
  email: string;
};

export const UserInfo: React.FC<Props> = ({ name, username, email }) => (
  <div className="UserInfo">
    <h2>User</h2>

    <div className="UserInfo__container">
      <span className="UserInfo__info">
        {'Real name: '}
      </span>

      <span data-cy="username">
        {name}
      </span>
    </div>

    <div className="UserInfo__container">
      <span className="UserInfo__info">
        {'Username: '}
      </span>

      <span>
        {username}
      </span>
    </div>

    <div className="UserInfo__container">
      <span className="UserInfo__info">
        {'Email: '}
      </span>

      <a href={`mailto: ${email}`} data-cy="email">
        {email}
      </a>
    </div>
  </div>
);
