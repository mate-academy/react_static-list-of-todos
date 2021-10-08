import React from 'react';

type Props = {
  userInfo: User;
};

export const UserInfo: React.FC<Props> = (props) => {
  const { userInfo } = props;
  const { name, username, email } = userInfo;

  return (
    <div className="user">
      <h3 className="user__username">
        {`Username: ${username}`}
      </h3>
      <p className="user__name">
        {`Name: ${name}`}
      </p>
      <span className="user__email">
        {`Email: ${email}`}
      </span>
    </div>
  );
};
