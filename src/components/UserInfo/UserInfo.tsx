// Add the required types and props
import { User } from '../../types/User';

type Props = {
  user: User | null,
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <>
    <div className="UserInfo">
      {user?.name}
    </div>
    <a href={user?.email}>
      {`mailto: ${user?.email}`}
    </a>
  </>
);
