import { Todo } from "../types/Types";
import { TodoInfo } from "./TodoInfo";

type PropsList = {
  listOfTodos: Todo[];
};

export const TodoList: React.FC<PropsList> = ({ listOfTodos }) => (
  <ul>
    {listOfTodos.map((todoItem) => (
      <li key={todoItem.id}>
        <TodoInfo todo={todoItem} />
      </li>
    ))}
  </ul>
);
