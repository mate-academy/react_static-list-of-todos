import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TypeTodo = {
  todo: Todo;
};

export const TodoInfo: React.FC<TypeTodo> = ({ todo }) => (
  <article
    className={
      !todo.completed
        ? 'TodoInfo'
        : 'TodoInfo TodoInfo--completed'
    }
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    {todo.user
      && <UserInfo user={todo.user} />}
  </article>
);
