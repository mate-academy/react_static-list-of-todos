import { ToDoUser } from '../types/ToDoUsersAll';
import './UserInfo.scss';

type Props = {
  user: ToDoUser;
};

export const UserInfo: React.FC<Props> = ({ user }) => (
  <div className="todo__user">
    <p className="todo__name">
      name:
      {' '}
      {user.name}
    </p>
    <p className="todo__name">
      mail:
      {' '}
      {user.email}
    </p>
  </div>
);
