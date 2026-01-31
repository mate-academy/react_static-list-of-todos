import { UserInfo } from '../UserInfo';
import { Todo } from './../../types/Todo';
import cn from 'classnames';

type PropsTodo = {
  todo: Todo;
};

export const TodoInfo: React.FC<PropsTodo> = ({ todo }) => {
  return (
    <article
      className={cn({
        TodoInfo: true,
        'TodoInfo--completed': todo.completed,
      })}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
