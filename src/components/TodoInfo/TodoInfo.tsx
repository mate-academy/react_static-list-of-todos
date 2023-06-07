import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface TodoInfoType {
  todoInfo: Todo;
}

export const TodoInfo: React.FC<TodoInfoType> = ({ todoInfo }) => {
  const {
    title,
    user,
    completed,
  } = todoInfo;

  if (!user) {
    throw new Error('Cant find user');
  }

  const arcticleClassname = classNames(
    'TodoInfo',
    { 'TodoInfo--completed': completed },
  );

  return (
    <article className={arcticleClassname}>
      <h2 className="TodoInfo__title">{title}</h2>

      <UserInfo user={user} />
    </article>
  );
};
