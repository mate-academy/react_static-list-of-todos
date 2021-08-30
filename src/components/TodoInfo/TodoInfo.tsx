import classNames from 'classnames';

import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

import './TodoInfo.scss';

type Props = Pick<Todo, 'title' | 'completed' | 'user'>;

export const TodoInfo: React.FC<Props> = (props) => {
  const { title, completed, user } = props;

  return (
    <div className="todo-info">
      <p className="todo-info__title">
        {title}
        <span className={classNames(
          'todo-info__status',
          {
            'todo-info__status--finished': completed,
          },
        )}
        />
      </p>

      {user && (
        <UserInfo {...user} />
      )}

    </div>
  );
};
