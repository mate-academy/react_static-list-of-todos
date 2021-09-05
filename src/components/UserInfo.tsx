import React from 'react';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = (props) => {
  const { user } = props;
  const { name, email } = user;

  return (
    <span className="user">
      <span className="user__name">
        {name}
      </span>
      <span className="user__email">
        {email}
      </span>
    </span>
  );
};
