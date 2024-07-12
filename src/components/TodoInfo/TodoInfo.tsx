import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

// Add the required types and props
type TodoInfoProps = {
  todo: Todo;
};

export const TodoInfo = ({ todo }: TodoInfoProps) => (
  <article className={`TodoInfo ${todo.completed && 'TodoInfo--completed'}`}>
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.user && <UserInfo user={todo.user} />}
  </article>
);
