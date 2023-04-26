import { UserInfo } from '../UserInfo/UserInfo';
import { Todo } from '../../types/Todo';

type TodoInfoProps = {
  todo: Todo
};

export const TodoInfo: React.FC<TodoInfoProps> = ({ todo }) => (
  <article className={`TodoInfo TodoInfo${todo.completed && '--completed'}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
