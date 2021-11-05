import { User } from './types';

type Props = {
  user: User,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    {user.name}
    {user.email}
  </>
);
