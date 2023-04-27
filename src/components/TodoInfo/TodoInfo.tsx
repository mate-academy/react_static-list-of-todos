import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type TodoListProps = {
  todo: Todo;
};

export const TodoInfo: React.FC<TodoListProps> = ({ todo }) => {
  return (
    <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user && <UserInfo user={todo.user} key={todo.userId} />}
    </article>
  );
};
