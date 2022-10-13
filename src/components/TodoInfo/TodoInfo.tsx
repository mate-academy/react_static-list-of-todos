import classNames from 'classnames';

import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const { title, user, completed } = todo;

  return (
    <div
      className={classNames(
        'card mb-3 TodoInfo w-100',
        {
          'text-bg-success TodoInfo--completed shadow': completed,
          'text-bg-danger shadow': !completed,
        },
      )}
      style={{ maxWidth: '25rem' }}
    >
      <div className="card-body ">
        <h5 className="card-title">
          {user
            && <UserInfo user={user} />}
        </h5>
        <p className="card-text TodoInfo__title">
          {title}
        </p>
      </div>
    </div>
  );
};
