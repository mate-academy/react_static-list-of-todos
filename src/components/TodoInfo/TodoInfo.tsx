import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

export const TodoInfo = ({ todo }: Props) => {
  const todoClasses = todo.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <article className={todoClasses} key={todo.id}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};

type Props = {
  todo: Todo;
};
