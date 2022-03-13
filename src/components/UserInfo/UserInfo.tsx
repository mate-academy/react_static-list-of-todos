import React from 'react';
import { User } from '../../types/User';

type Props = Partial<User>;

export const UserInfo: React.FC<Props> = ({
  name,
  email,
  website,
}) => (
  <div className="UserInfo">
    <h4 className="UserInfo__name">{name}</h4>

    <div>
      <span>Email: </span>
      <a
        href={`mailto: ${email}`}
        className="UserInfo__link"
      >
        {email}
      </a>
    </div>

    <div>
      <span>Website: </span>
      <a
        href={website}
        target="_blank"
        rel="noreferrer"
        className="UserInfo__link"
      >
        {website}
      </a>
    </div>
  </div>
);
