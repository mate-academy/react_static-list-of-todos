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
      <strong>
        {`Assigned to: ${name}`}
      </strong>
      <ul className="userInfo__contacts">
        <li>
          {`e-mail: ${email}`}
        </li>
        <li>
          {`call: ${phone}`}
        </li>
      </ul>
    </div>
  );
};
