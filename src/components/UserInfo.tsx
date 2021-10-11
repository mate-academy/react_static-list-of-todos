import React from 'react';

import './UserInfo.scss';

type Props = {
  user: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { name, email } = props.user;

  return (
    <>
      <div className="user__name">
        {name}
      </div>
      <div className="user__email">
        {email}
      </div>
    </>
  );
};
