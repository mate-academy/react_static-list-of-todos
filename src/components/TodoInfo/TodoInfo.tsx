import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodoProps = {
  todo: Todo,
};

export const TodoInfo = ({ todo }: TodoProps) => (
  <>
    {todo.completed
      ? (
        <>
          <article className="TodoInfo TodoInfo--completed">
            <h2 className="TodoInfo__title">{todo.title}</h2>
            {todo.user
              ? <UserInfo user={todo.user} key={todo.userId} />
              : null }
          </article>
        </>
      ) : (
        <>
          <article className="TodoInfo">
            <h2 className="TodoInfo__title">{todo.title}</h2>
            {todo.user
              ? <UserInfo user={todo.user} key={todo.userId} />
              : null }
          </article>
        </>
      )}
  </>
);
