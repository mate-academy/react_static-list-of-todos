import React from 'react';

type Props = {
  userName: string | undefined;
  userEmail: string | undefined;
};

export const UserInfo: React.FC<Props> = (props) => {
  const {
    userEmail,
    userName,
  } = props;

  return (
    <a className="UserInfo" href={`mailto:${userEmail}`}>
      {userName}
    </a>
  );
};
