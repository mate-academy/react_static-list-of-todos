import { User } from '../../types/types';

interface Props {
  user: User
}

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div>
    <p>
      {`User: ${user.name}`}
    </p>
    <p>
      {`Email: ${user.email}`}
    </p>
  </div>
);
