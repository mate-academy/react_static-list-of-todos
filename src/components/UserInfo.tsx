import { User } from '../types/User';

type Props = {
  userData: User
};

export const UserInfo: React.FC<Props> = ({ userData }) => (
  <p>
    {userData.name}
    {' - '}
    {userData.email}
  </p>
);
