import { User } from '../types/User';

type Props = {
  userData: User | null
};

export const UserInfo: React.FC<Props> = ({ userData }) => (
  <>
    {userData !== null
      ? (
        <p>
          {userData.name}
          {' - '}
          {userData.email}
        </p>
      )
      : (
        <p>
          No user data
        </p>
      )}
  </>
);
