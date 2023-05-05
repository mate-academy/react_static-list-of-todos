import { TodoInfo } from "../TodoInfo";
import { Todo } from "../../types/Todo";

export type Props = {
  todos: Todo[],
}

export const TodoList: React.FC<Props> = ({ todos }) => ( 
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todos={todo} key={todo.id} />
    ))}
  </section>
);
