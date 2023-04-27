import { User } from '../../types/User';

type TodoListProps = {
  user: User;
};

export const UserInfo: React.FC<TodoListProps> = ({ user }) => {
  return (
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  );
};
