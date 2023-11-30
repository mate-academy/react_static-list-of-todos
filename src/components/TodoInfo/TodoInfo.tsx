import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodoInfoProps = {
  todo: Todo
};

export const TodoInfo : React.FC<TodoInfoProps> = ({ todo }) => {
  let className = 'TodoInfo';

  if (todo.completed) {
    className += ' TodoInfo--completed';
  }

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">
        {todo.title}
      </h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
