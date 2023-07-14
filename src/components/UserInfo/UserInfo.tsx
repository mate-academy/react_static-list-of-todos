import { User } from '../../types/User';

// Add the required types and props

interface UserInfoProps {
  user: User;
}

export const UserInfo: React.FC<UserInfoProps> = ({
  user: {
    name,
    email,
  },
}) => {
  const mailLink = `mailto:${email}`;

  return (
    <a className="UserInfo" href={mailLink}>
      {name}
    </a>
  );
};
