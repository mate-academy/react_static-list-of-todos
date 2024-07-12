import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';
// Add the required types and props

type TodoListProps = {
  todos: Todo[];
};

export const TodoList = ({ todos }: TodoListProps) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
