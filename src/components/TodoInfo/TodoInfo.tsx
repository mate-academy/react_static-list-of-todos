import { PreparedTodo } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo: React.FC<PreparedTodo> = ({ title, completed, user }) => (
  <div className="TodoInfo">
    <h2>{title}</h2>
    <p>
      Completed:
      {completed ? 'yes' : 'no'}
    </p>
    {user && <UserInfo {...user} />}
  </div>
);
