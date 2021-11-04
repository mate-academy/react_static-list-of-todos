import React from 'react';
import './UserInfo.scss';

import { User } from '../../types/typedefs';

export const UserInfo:React.FC<User> = ({ name, email, phone }) => (
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
