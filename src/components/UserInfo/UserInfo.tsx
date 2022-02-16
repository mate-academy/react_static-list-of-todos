import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => {
  return user
    ? (
      <div>
        <p>{`name: ${user?.name}`}</p>
        <p>{`email: ${user?.email}`}</p>
      </div>
    )
    : (
      <p>
        no User;
      </p>
    );
};
