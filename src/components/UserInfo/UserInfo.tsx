import { User } from '../../types/User';

type Props = {
  user: User;
};

export const UserInfo = ({ user }: Props) => {
  const mail = `mailto:${user?.email}`;

  return (
    <a className="UserInfo" href={mail}>
      {user?.name}
    </a>
  );
};
