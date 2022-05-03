import React from 'react';
import { User } from '../../types/User';
import './UserInfo.scss';

type Props = {
  props: User,
};

export const UserInfo: React.FC<Props> = ({ props }) => (
  <>
    <ul className="User">
      <li className="User__name">
        {`That task for ${props.name} ${props.username}`}
      </li>
      <li className="User__email">
        {props.email}
      </li>
    </ul>
  </>
);
