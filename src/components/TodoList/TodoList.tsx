import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo';

export const TodoList: React.FC<{ todos: Todo[] }> = ({ todos }) => (
  <section className="TodoList">
    {todos.map(todo => (
      <TodoInfo todo={todo} key={todo.id} />
    ))}
  </section>
);
