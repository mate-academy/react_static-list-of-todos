import { PropsList } from "../types/Types";
import { TodoInfo } from "./TodoInfo";

export const TodoList: React.FC<PropsList> = ({ listOfTodos }) => (
  <ul>
    {listOfTodos.map((todoItem: any) => (
      <li key={todoItem.id}>
        <TodoInfo todo={todoItem} />
      </li>
    ))}
  </ul>
);
