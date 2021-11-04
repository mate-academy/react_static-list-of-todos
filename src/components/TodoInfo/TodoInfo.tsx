import { PreparedTodo } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<PreparedTodo> = ({
  title,
  completed,
  user,
}) => (
  <div className="TodoInfo">
    <h2>{title}</h2>
    <div className="InfoContainer">
      <p>
        Completed:
        {completed ? 'yes' : 'no'}
      </p>
      {user && <UserInfo {...user} />}
    </div>
  </div>
);
