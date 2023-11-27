import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodoProps = {
  todo: Todo,
};

export const TodoInfo = ({ todo }: TodoProps) => {
  const nameClass = todo.completed ? 'TodoInfo--completed' : '';

  return (
    <>
      <article className={`TodoInfo ${nameClass}`}>
        <h2 className="TodoInfo__title">{todo.title}</h2>
        {todo.user
          ? <UserInfo user={todo.user} key={todo.userId} />
          : null}
      </article>
    </>
  );
};
