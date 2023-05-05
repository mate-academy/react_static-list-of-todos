import { Todo } from "../../types/Todo";
import { UserInfo } from "../UserInfo";
import classNames from "classnames";

export type Props = {
  todos: Todo,
}

export const TodoInfo: React.FC<Props> = ({ todos }) => (
  <article className={classNames(
    'TodoInfo',
    { 'TodoInfo--completed': todos.completed },
  )}
  >
    <h2 className="TodoInfo__title">
      { todos.title}
    </h2>
    {todos.user && (
      <UserInfo users={todos.user} />
    )}
  </article>
);
