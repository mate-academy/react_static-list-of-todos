import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

interface TodoIProps {
  todo: Todo;
}
export const TodoInfo: React.FC<TodoIProps> = ({ todo }) => (
  <article
    className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>
    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
