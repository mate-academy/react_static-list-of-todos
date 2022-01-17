import { Todo } from '../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
  user,
}) => (
  <>
    <div className="card">
      <h2 className="card__title">
        {title}
      </h2>
      {completed ? (
        <h3 className="card__completed">completed</h3>
      ) : (
        <h3 className="card__notcompleted">not completed</h3>
      )}
    </div>
    {user && (<UserInfo {...user} />)}
  </>
);
