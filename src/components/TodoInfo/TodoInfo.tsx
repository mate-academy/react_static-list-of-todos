import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

export const TodoInfo = ({ todo }: { todo: Todo }) => (
  <article
    className={todo.completed
      ? 'TodoInfo TodoInfo--completed' : 'TodoInfo'}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo userId={todo.userId} />
  </article>
);
