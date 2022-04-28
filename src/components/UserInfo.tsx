import { User } from '../types/User';
import './User.scss';

type Props = {
  info: User;
};

export const UserInfo: React.FC<Props> = ({
  info: {
    name,
    username,
    email,
  },
}) => (
  <ul className="User">
    <li className="User__info">
      For
      {' '}
      {name}
      {' '}
      {username}
    </li>
    <li className="User__email">{email}</li>
  </ul>
);
