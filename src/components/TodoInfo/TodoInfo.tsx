import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

// Add the required types and props
export const TodoInfo: React.FC<{ todo: Todo }> = ({ todo }) => {
  const className = `TodoInfo${todo.completed ? ' TodoInfo--completed' : ''}`;

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={todo.user} key={todo.userId} />
    </article>
  );
};
