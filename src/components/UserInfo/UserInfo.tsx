import { User } from '../../types/User';

type Props = { user: User | null };

export const UserInfo: React.FC<Props> = ({ user }) => {
  return user
    ? (
      <h4>
        {`${user.name} (mail: ${user.email})`}
      </h4>
    )
    : null;
};
