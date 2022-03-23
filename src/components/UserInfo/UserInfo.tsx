import { User } from '../../types/User';

type Props = {
  user: User
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <h4>
    {`${user.name} (mail: ${user.email})`}
  </h4>
);
