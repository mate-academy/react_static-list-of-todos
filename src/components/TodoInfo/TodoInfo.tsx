import classNames from 'classnames';
import { Todo } from '../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<Todo> = ({
  title,
  completed,
  user,
}) => (
  <li
    className={classNames(
      'todoInfo',
      {
        ' todoInfo--done': completed === true,
      },
    )}
  >
    <h2 className="todoInfo__title">
      {`Todo: ${title}`}
    </h2>

    <p className="todoInfo__status">
      {(!user)
        ? 'User not choosed'
        : (
          <UserInfo
            id={user.id}
            name={user.name}
            email={user.email}
          />
        )}
      {`Status: ${(completed) ? 'Done' : 'Not done'}`}
    </p>
  </li>
);
