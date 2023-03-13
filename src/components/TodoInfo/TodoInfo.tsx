import classNames from 'classnames';
import './TodoInfo.scss';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo/UserInfo';

type Props = {
  todoCard: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todoCard }) => {
  const {
    title,
    completed,
    user,
  } = todoCard;

  return (
    <article className={classNames(
      'TodoInfo',
      {
        'TodoInfo--completed': completed,
      },
    )}
    >
      <h2 className="TodoInfo__title">
        {title}
      </h2>

      {user && (
        <UserInfo user={user} />
      )}
    </article>
  );
};
