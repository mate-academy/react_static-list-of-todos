import { User } from '../../types/User';

interface TodoListProps {
  user: User;
}

export const UserInfo: React.FC<TodoListProps> = ({ user }) => {
  const { name, email } = user;

  return (
    <a className="UserInfo" href={`mailto:${email}`}>
      {name}
    </a>
  );
};
