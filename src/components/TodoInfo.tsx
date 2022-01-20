import classNames from 'classnames';
import { UserInfo } from './UserInfo';
import './Todo.scss';

export const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
  user,
}) => (
  <div className="todo">
    {user && (<UserInfo {...user} />)}
    <p className="todo__title">{title}</p>
    <span className={classNames('ui', 'button', { red: !completed, green: completed })}>
      {completed
        ? 'Completed'
        : 'Not completed'}
    </span>
  </div>
);
