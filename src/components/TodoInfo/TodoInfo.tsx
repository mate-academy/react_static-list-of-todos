import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodoListProps = {
  todo: Todo,
};

export const TodoInfo: React.FC<TodoListProps> = ({ todo }) => {
  const { completed, title, user } = todo;

  return (
    <article className={`TodoInfo ${completed ? 'TodoInfo--completed' : ''}`}>
      <h2 className="TodoInfo__title">{title}</h2>

      {user && (<UserInfo user={user} />)}
    </article>
  );
};
