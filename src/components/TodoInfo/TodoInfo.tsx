import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface TodoInfoType {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoInfoType> = ({ todo }) => {
  const {
    title,
    user,
    completed,
  } = todo;

  const arcticleClassname = classNames(
    'TodoInfo',
    { 'TodoInfo--completed': completed },
  );

  return (
    <article className={arcticleClassname}>
      <h2 className="TodoInfo__title">{title}</h2>
      {user && <UserInfo user={user} />}
    </article>
  );
};
