import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
  user,
}) => (
  <>
    <div className="card-header">
      <h2 className="title is-3">
        {title}
      </h2>
      {completed ? (
        <h3 className="subtitle is-4 has-text-primary">is completed</h3>
      ) : (
        <h3 className="subtitle is-4 has-text-danger">is not completed </h3>
      )}
    </div>
    {user && (<UserInfo {...user} />)}
  </>
);
