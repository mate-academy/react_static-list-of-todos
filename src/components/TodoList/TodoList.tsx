import { Todo } from "../../types/Todo";
import { TodoInfo } from "../TodoInfo";

interface Props {
  todos: Todo[]
}

export const TodoList: React.FC<Props> = ({ todos }) => {

  return (
    <section className="TodoList">
      {todos.map((todo: Todo) => (<TodoInfo key={todo.id} info={todo} />))}
    </section>
  );
}

