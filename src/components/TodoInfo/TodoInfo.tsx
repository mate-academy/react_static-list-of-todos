import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type ToDo = {
  todo: Todo
};

export const TodoInfo: React.FC<ToDo> = ({ todo }) => {
  const { completed, user, title } = todo;

  return user && (
    <li className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': completed,
      },
    )}
    >
      <h2 className="TodoInfo__title">{title}</h2>
      <UserInfo user={user} />
    </li>
  );
};
