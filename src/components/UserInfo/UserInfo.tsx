import { User } from '../../types/User';

interface TodoUser {
  user: User;
}

export const UserInfo: React.FC<TodoUser> = ({ user }) => {
  const {
    name,
    email,
  } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
