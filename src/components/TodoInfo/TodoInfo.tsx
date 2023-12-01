// Add the required types and props
import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodoObj = {
  todo: Todo;
};

export const TodoInfo: React.FC<TodoObj> = ({ todo }) => {
  const className = todo.completed ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user ? <UserInfo user={todo.user} /> : null}
    </article>
  );
};
