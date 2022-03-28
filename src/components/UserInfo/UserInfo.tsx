import { FC } from 'react';

import './UserInfo.scss';

type Props = {
  name: string;
  email: string;
};

export const UserInfo: FC<Props> = (props) => {
  return (
    <div className="UserInfo">
      <h3 className="UserInfo__name">{props.name}</h3>
      <a
        className="UserInfo__email"
        href={`mailto:${props.email}`}
      >
        {props.email}
      </a>
    </div>
  );
};
