import { UserInfo } from "../UserInfo";
import { Todo } from "../../types/Todo";

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const articleClassName = todo.completed
    ? 'TodoInfo TodoInfo--completed' : 'TodoInfo';

  return (
    <article className={articleClassName}>
      <h2 className="TodoInfo__title">{todo.title}</h2>
  
      {!!todo.user && <UserInfo user={todo.user} />}
    </article>
  );
}
