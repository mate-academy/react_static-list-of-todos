import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

type TodoType = {
  todo: Todo;
};

export const TodoInfo: React.FC<TodoType> = ({ todo }) => {
  const { title, completed } = todo;

  return (
    <>
      <article className={`TodoInfo ${completed === true ? 'TodoInfo--completed' : null}`}>
        <h2 className="TodoInfo__title">{title}</h2>
        {todo.user ? <UserInfo user={todo.user} /> : 'Anonymous'}
      </article>
    </>
  );
};
