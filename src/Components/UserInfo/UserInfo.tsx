import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/typedefs';

type Props = {
  userInfo: User,
};

export const UserInfo:React.FC<Props> = (props) => {
  const { userInfo } = props;
  const { name, email, phone } = userInfo;

  return (
    <div className="userInfo">
      <div>
        <span className="userInfo__assign">Assigned to:</span>
        {` ${name}`}
      </div>
      <ul className="userInfo__contacts">
        <li className="contacts__email">
          <span>
            e-mail:
          </span>
          {` ${email}`}
        </li>
        <li>
          <span className="contacts__phone">
            call:
          </span>
          {` ${phone}`}
        </li>
      </ul>
    </div>
  );
};
