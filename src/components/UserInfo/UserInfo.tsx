import { User } from '../../types/User';

type Props = {
  todoUser: User | null;
};

export const UserInfo: React.FC<Props> = ({ todoUser }) => (
  <a className="UserInfo" href={todoUser ? (todoUser.email) : undefined}>
    {todoUser ? (todoUser.name) : undefined}
  </a>
);
