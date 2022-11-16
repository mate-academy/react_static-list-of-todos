import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  info: Todo
};

export const TodoInfo: React.FC<Props> = ({ info }) => {
  const {
    title,
    completed,
    user,
  } = info;

  return (
    <article className={classNames('TodoInfo', {
      'TodoInfo--completed': completed,
    })}
    >
      <h2 className="TodoInfo__title">{title}</h2>

      {user && <UserInfo user={user} />}
    </article>
  );
};
