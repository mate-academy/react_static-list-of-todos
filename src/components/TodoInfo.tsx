// import classNames from 'classnames';
import { UserInfo } from './UserInfo';
import './Todo.scss';

export const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
  user,
}) => {
  return (
    <div className="todo">
      {user && (<UserInfo {...user} />)}
      <p className="todo__title">{title}</p>
      {completed
        ? <button className="ui green button" type="button">Completed</button>
        : <button className="ui red button" type="button">Not completed</button>}
    </div>
  );
};
