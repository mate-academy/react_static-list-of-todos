// Add the required types and props
import { UserInfo } from '../UserInfo';
import { getUser } from '../../userHelper';
import { Todo } from '../../types/Todo';

interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo = ({ todo }: TodoInfoProps) => {
  const user = getUser(todo.userId);

  return (
    <article
      key={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      <UserInfo user={user} />
    </article>
  );
};
