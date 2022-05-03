import { Todo } from '../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({ title, completed, user }) => {
  const status = completed ? 'done' : 'not done';

  return (
    <div className="todo">
      <p className="todo__title">{title}</p>
      <h2>{status}</h2>
      {user && <UserInfo {...user} />}
    </div>
  );
};
