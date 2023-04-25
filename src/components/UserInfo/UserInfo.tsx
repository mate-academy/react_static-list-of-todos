import { User } from '../../types/User';

type TypeUser = {
  user: User;
};

export const UserInfo: React.FC<TypeUser> = ({ user }) => {
  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      { name }
    </a>
  );
};
