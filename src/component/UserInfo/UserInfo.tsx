import { User } from '../../types/User';

type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  user && (
    <div className="">
      <span>
        <strong>User-name:</strong>
        {' '}
        {user.name}
      </span>
      {' '}
      <span>
        <strong>Email:</strong>
        {' '}
        {user.email}
      </span>
    </div>
  )
);
