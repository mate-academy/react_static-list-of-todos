import classNames from "classnames";
import { Todo } from "../../types/Todo";
import { UserInfo } from "../UserInfo";

interface TodoInfoProps {
  todo: Todo;
}

export const TodoInfo = ({
  todo: { completed, title, user },
}: TodoInfoProps) => (
  <article
    className={classNames("TodoInfo", {
      "TodoInfo--completed": completed,
    })}
  >
    <h2 className="TodoInfo__title">{title}</h2>

    <UserInfo user={user} />
  </article>
);
