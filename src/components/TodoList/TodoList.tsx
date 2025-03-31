// Add the required types and props
import { TodoInfo } from '../TodoInfo';
import { type Todo } from '../../types/Todo';

interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <section className="TodoList">
    {todos.length === 0 ? (
      <p>No todos available</p>
    ) : (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <TodoInfo todo={todo} />
          </li>
        ))}
      </ul>
    )}
  </section>
);
