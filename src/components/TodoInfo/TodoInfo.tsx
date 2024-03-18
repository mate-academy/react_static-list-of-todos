import { Todo } from '../../types/Todo';
import { UserInfo } from '../UserInfo';

// Add the required types and props
type TodoInfoProps = {
  todo: Todo;
};

export const TodoInfo: React.FC<TodoInfoProps> = ({
  todo: { title, completed, user },
}) => (
  <article className={`TodoInfo  + ${completed && 'TodoInfo--completed'}`}>
    <h2 className="TodoInfo__title">{title}</h2>
    {user && <UserInfo user={user} />}
  </article>
);

// - `TodoInfo` takes a `todo` and renders its details, including a `todo.user` with `UserInfo` component if the todo has a user;
// - make sure that the `TodoInfo` has a `TodoInfo--completed` modifier for all completed todos;
// - `UserInfo` takes a `user` and renders the details.
