import React from 'react';
import './UserInfo.scss';

type Props = {
  name: string,
  username: string,
  email: string,
  website: string,
};

export const UserInfo: React.FC<Props> = ({
  name, username, email, website,
}) => (
  <div className="UserInfo">
    <h3 className="UserInfo__names">
      <span className="UserInfo__username">{username}</span>
      {' ('}
      <span className="UserInfo__name">{name}</span>
      )
    </h3>

    <a className="UserInfo__email" href={`mailto: ${email}`}>
      {'Email: '}
      {email}
    </a>
    <a className="UserInfo__website" href={website}>
      {'Website: '}
      {website}
    </a>
  </div>
);
