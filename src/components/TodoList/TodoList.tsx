import { TodoInfo } from '../TodoInfo';
import type { Todo } from '../../types/Todo';

// Add the required types and props
interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <>
    <section className="TodoList">
      {todos.map(todo => (
        <TodoInfo key={todo.id} todo={todo} />
      ))}
    </section>
  </>
);
