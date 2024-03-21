import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

interface ToDoLProps {
  todos: Todo[];
}

export const TodoList: React.FC<ToDoLProps> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo key={todo.id} todo={todo} />
    ))}
  </section>
);
