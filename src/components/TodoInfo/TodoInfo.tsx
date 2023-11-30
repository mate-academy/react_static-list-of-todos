import { UserInfo } from '../UserInfo';
import { Todo } from '../../types/Todo';

type ToDosType = {
  todo: Todo
};

export const TodoInfo = ({ todo }: ToDosType) => {
  return (
    <article
      key={todo.id}
      className={todo.completed
        ? 'TodoInfo TodoInfo--completed'
        : 'TodoInfo'}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user ? <UserInfo key={todo.id} user={todo.user} /> : null}
    </article>
  );
};
