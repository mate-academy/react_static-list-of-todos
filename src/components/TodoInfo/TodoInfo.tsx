import classNames from 'classnames';

import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

import './TodoInfo.scss';

type Props = {
  todoItem: Todo;
};

export const TodoInfo: React.FC<Props> = (props) => {
  const { todoItem } = props;
  const { title, completed, user } = todoItem;

  return (
    <>
      <div className="todo-info">
        <a className="todo-info__link" href="/">
          <h2 className="todo-info__title">
            {title}
          </h2>
        </a>
        <span className={classNames(
          'todo-info__status',
          {
            'todo-info__status--finished': completed,
          },
        )}
        />
      </div>
      {user && (
        <UserInfo userInfo={user} />
      )}
    </>
  );
};
