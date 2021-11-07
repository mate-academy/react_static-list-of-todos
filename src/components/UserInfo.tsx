import { User } from '../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div>{user?.name}</div>
    <div>{user?.email}</div>
  </>
);
