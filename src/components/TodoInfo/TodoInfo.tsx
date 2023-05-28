import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const todoInfoClass = classNames({ 'TodoInfo--completed': todo.completed });

  return (
    <article className={`TodoInfo ${todoInfoClass}`}>
      <h2 className="TodoInfo__title">
        {todo.title}
      </h2>

      {todo.user ? <UserInfo user={todo.user} /> : null}
    </article>
  );
};
