import { User } from '../../types/User';

type UserProps = {
  user: User | null;
};

export const UserInfo = ({ user }: UserProps) => {
  return (
    user && (
      <a className="UserInfo" href={`mailto:${user.email}`}>
        {user.name}
      </a>
    )
  );
};
