import { UserInfo } from '../UserInfo';
import type { Todo } from '../../types/Todo';
import { getUser } from '../../App';
import cn from 'classnames';

interface TodoProps {
  todo: Todo;
}

export const TodoInfo: React.FC<TodoProps> = ({ todo }) => {
  const user = getUser(todo.userId);

  return (
    <>
      <article
        className={cn('TodoInfo', { 'TodoInfo--completed': todo.completed })}
      >
        <h2 className="TodoInfo__title">{todo.title}</h2>
        {user && <UserInfo user={user} />}
      </article>
    </>
  );
};
