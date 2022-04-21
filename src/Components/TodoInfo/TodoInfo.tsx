import { Todo } from '../../Types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({ title, completed, user }) => (
  <div className="todo">
    <h2 className="todo__title">{title}</h2>
    <h3 className={`todo__status ${completed ? 'todo__status--completed' : ''}`}>
      {completed ? 'Completed' : 'In progress'}
    </h3>
    {user && <UserInfo {...user} />}
  </div>
);
