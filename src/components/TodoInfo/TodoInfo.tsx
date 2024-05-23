import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

export const TodoInfo: React.FC<{ todos: Todo }> = ({ todos }) => {
  const isCompleted = todos.completed
    ? 'TodoInfo TodoInfo--completed'
    : 'TodoInfo';

  return (
    <>
      <article className={isCompleted}>
        <h2 className="TodoInfo__title">{todos.title}</h2>
        <UserInfo user={todos.user} />
      </article>
    </>
  );
};
