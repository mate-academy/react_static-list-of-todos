import { User } from '../../types/User';

// Add the required types and props
type Props = {
  user: User;
};

export const UserInfo = ({ user }: Props) => {
  if (user) {
    return (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    );
  }

  return null;
};
