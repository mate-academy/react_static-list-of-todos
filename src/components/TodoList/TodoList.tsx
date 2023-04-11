import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface TodoListstProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListstProps> = ({ todos }) => (
  <section className="TodoList">
    {todos.map((todo) => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
