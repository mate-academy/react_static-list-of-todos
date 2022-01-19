import classNames from 'classnames';
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
      <h3 className={classNames(
        'card__notcompleted',
        { card__completed: completed },
      )}
      >
        {completed
          ? 'Completed'
          : 'Not completed'}
      </h3>
    </div>
    {user && (<UserInfo {...user} />)}
  </>
);
