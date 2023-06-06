import React from 'react';
import { User } from '../../types/User';

type Props = {
  infoAboutUser: User;
};

export const UserInfo:React.FC<Props> = ({ infoAboutUser }) => {
  return (
    <a className="UserInfo" href={`mailto:${infoAboutUser.email}`}>
      {infoAboutUser.name}
    </a>
  );
};
