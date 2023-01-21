import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface ITodos {
  todos: Todo[];
}

export const TodoList = ({ todos }: ITodos) => {
  return (
    <section className="TodoList">
      {todos.map((todo) => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  );
};
