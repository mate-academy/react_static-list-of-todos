import React from "react";
import { User } from "../../types/User";

type Props = {
  user: User | null;
}

export const UserInfo: React.FC<Props> = ({ user }) => {
  if (user !== null){
    return (
      <a className="UserInfo" key={user.id} href={'mailto:' + user.email}>
            {user.name}
          </a>
    );
  }
  return undefined;
}
