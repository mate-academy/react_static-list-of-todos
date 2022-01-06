import { PropsItem } from "../types/Types";
import { UserInfo } from "./UserInfo";

export const TodoInfo: React.FC<PropsItem> = ({ todo }) => (
  <div className="todo">
    <h2 className="todo__title">{todo.title}</h2>
    <span className="todo__completion-status">
      completion status:
      {todo.completed ? ' true' : ' false'}
    </span>
    <UserInfo user={todo.user} />
  </div>
);
