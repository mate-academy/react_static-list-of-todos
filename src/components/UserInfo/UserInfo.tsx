import React from 'react';
import { User } from '../../types/User';

type Props = {
  userInfo: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { userInfo } = props;
  const {
    name,
    email,
    phone,
  } = userInfo;

  return (
    <div className="user">
      <p className="user__name">
        {`Name: ${name}`}
      </p>
      <p className="user__email">
        {`Email: ${email}`}
      </p>
      <p className="user__phone">
        {`Phone: ${phone}`}
      </p>
    </div>
  );
};
