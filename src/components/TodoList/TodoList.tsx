import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

// Add the required types and props
export const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => (
  <section className="TodoList">
    {todos.map((todo: Todo) => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
