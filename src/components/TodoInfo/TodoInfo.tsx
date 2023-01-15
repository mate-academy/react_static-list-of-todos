import { Todo } from "../../types/Todo";
import { UserInfo } from "../UserInfo";

interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo = ({ todo }: TodoInfoProps) => (
  <article
    className={todo.completed ? "TodoInfo TodoInfo--completed" : "TodoInfo"}
  >
    <h2 className="TodoInfo__title">{todo.title}</h2>

    <UserInfo user={todo.user} />
  </article>
);
