import { User } from '../../types/User';

interface UserProps {
  user: User;
}

export const UserInfo = (props: UserProps) => {
  const { user } = props;

  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
