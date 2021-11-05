import { PreparedTodo } from '../../types/types';
import { UserInfo } from '../UserInfo/UserInfo';

export const TodoInfo: React.FC<PreparedTodo> = ({
  title,
  completed,
  user,
}) => (
  <div className="TodoList__content">
    <h2 className="TodoList__title">{title}</h2>
    <div className="TodoList__body">
      <p className="TodoList__status">
        Completed:
        {completed ? 'yes' : 'no'}
      </p>
      {user && <UserInfo {...user} />}
    </div>
  </div>
);
