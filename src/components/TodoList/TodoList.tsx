import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';


interface TodoArray {
  todos: Todo[];
}

export function TodoList({ todos }: TodoArray) {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
}
