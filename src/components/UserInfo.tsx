import { User } from '../types/User';
import './User.scss';

type Props = {
  info: User | null;
};

export const UserInfo: React.FC<Props> = ({ info }) => (
  <ul className="User">
    <li className="User__info">
      For
      {' '}
      {info && info.name}
      {' '}
      {info && info.username}
    </li>
    <li className="User__email">{info && info.email}</li>
  </ul>
);
