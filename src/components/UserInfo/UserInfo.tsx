import React from 'react';
import { User } from '../../types/User';

interface Props {
  user: User;
}
// Add the required types and props
export const UserInfo: React.FC<Props> = ({ user: { name, email } }) => (
  <a
    className="UserInfo"
    href={`mailto:${email}`}
  >
    {name}
  </a>
);
