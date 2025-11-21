import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

export const TodoInfo = ({ todo }: { todo: Todo }) => {
  const className = `TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`;
  const isUser = !!todo.user;

  return (
    <article className={className}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {isUser && <UserInfo user={todo.user} />}
    </article>
  );
};
