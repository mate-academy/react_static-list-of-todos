import { User } from '../../types/User';

// Add the required types and props
type Props = {
  user: User | null;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  user && (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  )
);
