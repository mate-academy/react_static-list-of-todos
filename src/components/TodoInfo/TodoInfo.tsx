import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';
import './TodoInfo.scss';

export const TodoInfo: React.FC<{ todo: Todo }> = ({ todo }) => {
  const completedClass = `TodoInfo--completed`;
  const articleClassName = `TodoInfo ${todo.completed && completedClass}`;

  return (
    <article className={articleClassName}>
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {todo.user && <UserInfo user={todo.user} />}
    </article>
  );
};
